import React from 'react';
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
  Select
} from '@backstage/core-components';
// import { ExampleFetchComponent, ExampleFetchComponent2 } from '../ExampleFetchComponent';

// export const ExampleComponent = () => (
//   <Page themeId="tool">
//     <Header title="Welcome to cost-management!" subtitle="Optional subtitle">
//       <HeaderLabel label="Owner" value="Team X" />
//       <HeaderLabel label="Lifecycle" value="Alpha" />
//     </Header>
//     <Content>
//       <ContentHeader title="Plugin title">
//         <SupportButton>A description of your plugin goes here.</SupportButton>
//       </ContentHeader>
//       <Grid container spacing={3} direction="column">
//         <Grid item>
//           <InfoCard title="Information card">
//             <Typography variant="body1">
//               All content should be wrapped in a card like this.
//             </Typography>
//           </InfoCard>
//         </Grid>
//         <Grid item>
//           {/* <ExampleFetchComponent /> */}
//           <ExampleFetchComponent2 />
//         </Grid>
//       </Grid>
//     </Content>
//   </Page>

// import { ExampleFetchComponent } from '../ExampleFetchComponent';

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

const generateTestData = (rows = 10) => {
  const data: Array<TableData> = [];
  while (data.length < rows) {
    data.push({
      container: `Container ${data.length + 1}`,
      project: 'Website',
      workload: 'Workload',
      workload_type: 'Stage',
      cluster: `Cluster ${data.length + 1}`,
      last_reported: '6 hours ago'
    });
  }
  return data;
};

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
        <Link to="#message-source">{row.cluster}</Link>
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

const ClusterFilter = () => (
  <Select
    placeholder="All results"
    label="CLUSTER"
    items={SELECT_ITEMS}
    multiple
    onChange={() => {}}
  />
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

export const ExampleComponent = () => {
  return (
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
              <Table
                options={{ paging: true, padding: 'dense' }}
                data={generateTestData(10)}
                columns={columns}
                title="Optimizable containers   (4)"
              />
            </Grid>
          </Grid> 
          </Content>
      </Page>
    </div>
  );
};
