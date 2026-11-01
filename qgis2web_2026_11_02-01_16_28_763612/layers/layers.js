var wms_layers = [];

var lyr_omp100_2025_clipped_0 = new ol.layer.Image({
        opacity: 1,
        
    title: 'omp100_2025_clipped<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/omp100_2025_clipped_0.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [12676448.569692, 2542615.320485, 12687611.940329, 2551630.320388]
        })
    });
var format_Module1DotsB11_1 = new ol.format.GeoJSON();
var features_Module1DotsB11_1 = format_Module1DotsB11_1.readFeatures(json_Module1DotsB11_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Module1DotsB11_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Module1DotsB11_1.addFeatures(features_Module1DotsB11_1);
cluster_Module1DotsB11_1 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Module1DotsB11_1
});
var lyr_Module1DotsB11_1 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Module1DotsB11_1, 
                style: style_Module1DotsB11_1,
                popuplayertitle: 'Module1 Dots(B11)',
                interactive: true,
                title: '<img src="styles/legend/Module1DotsB11_1.png" /> Module1 Dots(B11)'
            });

lyr_omp100_2025_clipped_0.setVisible(true);lyr_Module1DotsB11_1.setVisible(true);
var layersList = [lyr_omp100_2025_clipped_0,lyr_Module1DotsB11_1];
lyr_Module1DotsB11_1.set('fieldAliases', {'photo_no': 'photo_no', 'box_no': 'box_no', 'file_name': 'file_name', 'capture_date': 'capture_date', 'photo_path': 'photo_path', 'photographer': 'photographer', 'handler': 'handler', 'location_precision': 'location_precision', 'sorting_date': 'sorting_date', 'location_source': 'location_source', 'notes': 'notes', 'location_note': 'location_note', 'Longitude_WGS84': 'Longitude_WGS84', 'Latitude_WGS84': 'Latitude_WGS84', });
lyr_Module1DotsB11_1.set('fieldImages', {'photo_no': 'TextEdit', 'box_no': 'TextEdit', 'file_name': 'TextEdit', 'capture_date': 'TextEdit', 'photo_path': 'ExternalResource', 'photographer': 'TextEdit', 'handler': 'TextEdit', 'location_precision': 'TextEdit', 'sorting_date': 'TextEdit', 'location_source': 'TextEdit', 'notes': 'TextEdit', 'location_note': 'TextEdit', 'Longitude_WGS84': 'TextEdit', 'Latitude_WGS84': 'TextEdit', });
lyr_Module1DotsB11_1.set('fieldLabels', {'photo_no': 'inline label - always visible', 'box_no': 'inline label - always visible', 'file_name': 'inline label - always visible', 'capture_date': 'inline label - always visible', 'photo_path': 'inline label - always visible', 'photographer': 'inline label - always visible', 'handler': 'inline label - always visible', 'location_precision': 'inline label - always visible', 'sorting_date': 'inline label - always visible', 'location_source': 'inline label - always visible', 'notes': 'inline label - always visible', 'location_note': 'inline label - always visible', 'Longitude_WGS84': 'inline label - always visible', 'Latitude_WGS84': 'inline label - always visible', });
lyr_Module1DotsB11_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});