import React, { useState, useEffect } from 'react';
import { Typography, Grid, Chip, Box } from '@material-ui/core';
import {
  InfoCard,
  Header,
  HeaderLabel,
  HeaderTabs,
  Page,
  Content,
  ContentHeader,
  Link, TrendLine,
  TableColumn, Table,
  SupportButton, StatusOK, GaugeCard,
  Select,Progress, ResponseErrorPanel
} from '@backstage/core-components';
import { SearchBar } from '@backstage/plugin-search-react';
import { TablePagination, TextField } from '@material-ui/core';
import useAsync from 'react-use/lib/useAsync';
import { useApi, configApiRef } from '@backstage/core-plugin-api';
import { optimizationsApiRef } from '../../api/refs';
import { Apis } from "@backstage-community/plugin-resource-optimization-common";
import { JsonUtils } from "@backstage-community/plugin-resource-optimization-common";
import { toCamelCaseObjectKeys } from '@backstage-community/plugin-resource-optimization-common/src/utils/json';
import { RecommendationList, Recommendations } from '@backstage-community/plugin-resource-optimization-common/src/generated/models';
import debounce from 'lodash/debounce';

export default {
  title: 'Plugins/Examples',
  component: Page,
};

interface TableData {
  container: string;
  project: string;
  workload: string;
  workload_type: string;
  cluster: string;
  last_reported: string;
}

interface  query {
  cluster?: string;
  workloadType?: string;
  workload?: string;
  container?: string;
  project?: string;
  startDate?: string;
  endDate?: string;
  offset?: number;
  limit?: number;
  orderBy?: string;
  orderHow?: string;
}

export const ExampleComponent = () => {

  const config = useApi(configApiRef);

  // Pagination 
  const [data, setData] = useState<TableData[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchQuery, setSearchQuery] = useState<query>({});
  const [clusterSearchValue, setClusterSearchValue] = useState('');

  
  const api = useApi(optimizationsApiRef);

  const debouncedSearchQuery = debounce((query: string) => {
    setClusterSearchValue(query);
    setPage(0); // Reset page to 0 when search query changes
  }, 300); // Adjust debounce delay as needed

  const fetchData = async (searchQuery: query) => {

    setLoading(true);
    

    
    try {
      const response = await (await api.getRecommendationList({ query: searchQuery })).text();

      const formattedData: Array<TableData> = [];

      if(response){
        const responseData = toCamelCaseObjectKeys<RecommendationList>(JSON.parse(response));
  
        responseData?.data?.map( (item: Recommendations) => {
          formattedData.push({
              container: item.container ? item.container : '',
              project: item.project ? item.project : '',
              workload: item.workload ? item.workload : '',
              workload_type: item.workloadType ? item?.workloadType : '',
              cluster:  item.clusterAlias ? item.clusterAlias : item.clusterUuid ? item.clusterUuid : '',
              last_reported: '6 hours ago'
          });
        })
        
        setData(formattedData);
        setLoading(false)
      }
    } catch (error) {
      setLoading(false);
      console.error('Error fetching data:', error);
    }
  };


  useEffect(() => {
    const searchQuery = {limit: 1000}
    fetchData(searchQuery);
  }, [searchQuery]);


  const columns: TableColumn[] = [
    {
      title: 'Container names',
      highlight: true,
      render: (row: Partial<TableData>) => (
        <>
          <Link to="#message-source">{row.container}</Link>
        </>
      ),
    },
    {
      title: 'Project names',
      render: (row: Partial<TableData>) => (
        <>
        <Typography variant="body2">{row.project}</Typography>
        </>
      ),
    },
    {
      title: 'Workload names',
      render: (row: Partial<TableData>) => (
        <>
        <Typography variant="body2">{row.workload}</Typography>
        </>
      ),
    },
    {
      title: 'Workload types',
      render: (row: Partial<TableData>) => (
        <>
        <Typography variant="body2">{row.workload_type}</Typography>
        </>
      ),
    },
    {
      title: 'Cluster names',
      render: (row: Partial<TableData>) => (
        <>
          <Typography variant="body2">{row.cluster}</Typography>
        </>
      ),
    },
    {
      title: 'Last reported',
      render: (row: Partial<TableData>) => (
        <>
        <Typography variant="body2">{row.last_reported}</Typography>
        </>
      ),
    }
  ];


  const ExampleHeader = () => (
    <Header title="Resource Optimization">
    </Header>
  );

  const SELECT_ITEMS = [
    {
      label: 'Cluster 1',
      value: 'cluster_1',
    },
    {
      label: 'Cluster 2',
      value: 'cluster_2',
    },
    {
      label: 'Cluster 3',
      value: 'cluster_3',
    },
  ];

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const clusterSearchValue = event.target.value;
    setClusterSearchValue(query);
    //debouncedSearchQuery(clusterSearchValue)
    //setSearchQuery({...searchQuery, cluster: clusterSearchValue});
  };

  

  const ClusterFilter = () => (
    <>
      <SearchBar
          placeholder="Filter by cluster"
          debounceTime={300}
      />
      
      <Chip
        label='demo'
        size='medium'
        variant='default'
        onDelete={() => ({})} />
    </>
    
  );

  const ProjectFilter = () => (
    <Select
      placeholder="All results"
      label="PROJECT"
      items={SELECT_ITEMS}
      multiple
      onChange={() => {}}
    />
  );

  const WorkloadFilter = () => (
    <Select
      placeholder="All results"
      label="WORKLOAD"
      items={SELECT_ITEMS}
      multiple
      onChange={() => {}}
    />
  );

  const TypeFilter = () => (
    <Select
      placeholder="All results"
      label="TYPE"
      items={SELECT_ITEMS}
      multiple
      onChange={() => {}}
    />
  );

  //const paginatedData = generateData().slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
      loading ? 
      <Progress /> :
      <div style={{ border: '1px solid #ddd' }}>
        <Page themeId="tool">
        <Content >
            <ExampleHeader />
            <h2>Filters</h2>
            <br/>
            <Grid container direction="row">
              <Grid item xs={3}>
                
                  <ClusterFilter />
                  <ProjectFilter />
                  <WorkloadFilter />
                  <TypeFilter />
                
              </Grid>
              
              <Grid item xs={9}>
                <>
                  <Table
                    data={data}
                    columns={columns}
                    title="Optimizable containers"
                  />
                </>
                
              </Grid>
            </Grid> 
            </Content>
        </Page>
      </div>
  );
};