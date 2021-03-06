import { ActionForm } from "../AddAction";
import { Metric, Action, ChartData, ActionType } from "../types";

export const metricsGroupChartData = {
  id: "d4b69bf8-34cd-4bf0-81c3-781202f16dd6",
  metric: "test 12",
  result: [
    {
      total: 10,
      period: 1599074229
    }
  ]
};

const Execution = {
  lastValue: 0,
  status: 'ERROR'
}

export const metricsData: Metric = {
  id: "1a",
  nickname: "test 1a",
  createdAt: "test",
  metricGroupId: "d4b69bf8-34cd-4bf0-81c3-781202f17fe7",
  condition: 'EQUAL',
  threshold: 10,
  status: 'ACTIVE',
  execution: Execution,
  circleId: "d4b69bf8-34cd-4bf0-81c3-781202f16dd6",
  dataSourceId: 'abc123',
  metric: 'metric xyz',
  filters: [
    {
      id: '1',
      field: 'field 1',
      operator: '=',
      value: 'value 1'
    },
    {
      field: 'field 2',
      operator: '!=',
      value: 'value 2'
    },
    {
      field: 'field 3',
      operator: '!~',
      value: 'value 3'
    }
  ]
};

export const actionData: Action = {
  id: '1action',
  nickname: 'action',
  status: 'SUCCESS',
  triggeredAt: '10/08/2015 12:35',
  actionType: 'Circle promotion'
};

export const actionForm = {
  actionId: '1',
  nickname: 'foobar',
  circleId: '4'
}

export const actionType = {
  id: '1',
  createdAt: '2020',
  workspaceId: '123',
  nickname: 'foobar',
  type: 'circledeployment',
  description: 'description x',
  configuration: '{ "fake": "json" }'
}

export const actionsType = [actionType];

export const metricGroupItem = {
  id: "d4b69bf8-34cd-4bf0-81c3-781202f17fe7",
  circleId: "d4b69bf8-34cd-4bf0-81c3-781202f16dd6",
  name: "test 1",
  metrics: [metricsData],
  actions: [actionData],
  status: "ACTIVE"
}

export const metricsGroupData = [metricGroupItem];

export const metricsGroupWithoutMetricData = [{
  id: "d4b69bf8-34cd-4bf0-81c3-781202f17fe7",
  circleId: "d4b69bf8-34cd-4bf0-81c3-781202f16dd6",
  name: "test 1",
  metrics: [],
  actions: [],
  status: "ACTIVE"
}];

export const optionsValues = [
  {
    "label": "1",
    "value": "1"
  },
  {
    "label": "2",
    "value": "2"
  }
];

export const thresholdStatusResponse = [
  {
    icon: 'bell',
    color: 'reached',
    message: 'This metric has reached its goal.',
    ResumeMessage: 'This metrics group has reached its goal.'
  },
  {
    icon: 'error',
    color: 'error',
    message: 'An error occurred in this metric.',
    ResumeMessage: 'There is at least one error in your metrics group.'
  },
  {
    icon: 'bell',
    color: 'active',
    message: 'This metric has not yet reached its goal.',
    ResumeMessage: 'This metrics group has not yet reached its goal.'
  }
];

export const dataForMetricsSeriesTests = [{
  id: '1',
  metric: 'test 1',
  result: [
    {
      total: 10,
      period: 1
    }
  ]
},
{
  id: '2',
  metric: 'test 2',
  result: [
    {
      total: 10,
      period: 1
    }
  ]
}];

export const dataFormatted = [{
  name: 'test 1',
  data: [
    {
      y: 10,
      x: 1000
    }
  ]
}, {
  name: 'test 2',
  data: [
    {
      y: 10,
      x: 1000
    }
  ]
}] as ChartData[];

export const allSelect = [{
  label: 'select all',
  value: '*'
}];

export const someIsSelect = [{
  label: 'test 2',
  value: 'test 2'
}];

export const dataFormattedAndFilter = [{
  name: 'test 2',
  data: [
    {
      y: 10,
      x: 1000
    }
  ]
}] as ChartData[];
