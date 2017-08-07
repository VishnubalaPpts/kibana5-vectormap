import 'plugins/vectormap/vectormap.less';
import 'plugins/vectormap/lib/vectormap_controller.js';
import 'plugins/vectormap/lib/vectormap_directive.js';

import { VisTypesRegistryProvider } from 'ui/registry/vis_types';
import { TemplateVisTypeProvider } from 'ui/template_vis_type/template_vis_type';
import { VisSchemasProvider } from 'ui/vis/schemas';

VisTypesRegistryProvider.register(VectormapProvider);

function VectormapProvider(Private) {
  const TemplateVisType = Private(TemplateVisTypeProvider);
  const Schemas = Private(VisSchemasProvider);

  return new TemplateVisType({
    name: 'vectormap',
    title: 'Vector Map',
    description: 'Displays a map of shaded regions using a field containing a 2 letter country ' +
      ', or US state, code. Regions with more hits are shaded darker. Note that this does use the' +
      ' Elasticsearch terms aggregation, so it is important that you set it to the correct field.',
    icon: 'fa-map',
    template: require('plugins/vectormap/vectormap.html'),
    params: {
      defaults: {
        mapType: 'world_mill',
        minColor: '#A0E2E2',
        maxColor: '#265656',
        zoomOnScroll: false,
        tipNumberFormat: 'number'
      },
      editor: require('plugins/vectormap/vectormap_vis_params.html')
    },
    schemas: new Schemas([
      {
        group: 'metrics',
        name: 'metric',
        title: 'Metric',
        min: 1,
        max: 1,
        aggFilter: ['avg', 'sum', 'count', 'min', 'max', 'median', 'cardinality'],
        defaults: [
          { schema: 'metric', type: 'count' }
        ]
      },
      {
        group: 'buckets',
        name: 'segment',
        icon: 'fa fa-map',
        title: 'Geocode',
        min: 1,
        max: 1,
        aggFilter: ['terms', 'significant_terms']
      }
    ])
  });
}
