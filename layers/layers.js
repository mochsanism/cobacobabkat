var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_BANTEN_JAKARTA_JABAR_1 = new ol.format.GeoJSON();
var features_BANTEN_JAKARTA_JABAR_1 = format_BANTEN_JAKARTA_JABAR_1.readFeatures(json_BANTEN_JAKARTA_JABAR_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BANTEN_JAKARTA_JABAR_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BANTEN_JAKARTA_JABAR_1.addFeatures(features_BANTEN_JAKARTA_JABAR_1);
var lyr_BANTEN_JAKARTA_JABAR_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BANTEN_JAKARTA_JABAR_1, 
                style: style_BANTEN_JAKARTA_JABAR_1,
                popuplayertitle: 'BANTEN_JAKARTA_JABAR',
                interactive: true,
    title: 'BANTEN_JAKARTA_JABAR<br />\
    <img src="styles/legend/BANTEN_JAKARTA_JABAR_1_0.png" /> Bandung-Soreang<br />\
    <img src="styles/legend/BANTEN_JAKARTA_JABAR_1_1.png" /> Banjarsari<br />\
    <img src="styles/legend/BANTEN_JAKARTA_JABAR_1_2.png" /> Batujajar<br />\
    <img src="styles/legend/BANTEN_JAKARTA_JABAR_1_3.png" /> Bekasi-Karawang<br />\
    <img src="styles/legend/BANTEN_JAKARTA_JABAR_1_4.png" /> Bogor<br />\
    <img src="styles/legend/BANTEN_JAKARTA_JABAR_1_5.png" /> Ciamis<br />\
    <img src="styles/legend/BANTEN_JAKARTA_JABAR_1_6.png" /> Cianjur<br />\
    <img src="styles/legend/BANTEN_JAKARTA_JABAR_1_7.png" /> Ciater<br />\
    <img src="styles/legend/BANTEN_JAKARTA_JABAR_1_8.png" /> Cibuni<br />\
    <img src="styles/legend/BANTEN_JAKARTA_JABAR_1_9.png" /> Garut<br />\
    <img src="styles/legend/BANTEN_JAKARTA_JABAR_1_10.png" /> Indramayu<br />\
    <img src="styles/legend/BANTEN_JAKARTA_JABAR_1_11.png" /> Jakarta<br />\
    <img src="styles/legend/BANTEN_JAKARTA_JABAR_1_12.png" /> Jampangkulon<br />\
    <img src="styles/legend/BANTEN_JAKARTA_JABAR_1_13.png" /> Kawali<br />\
    <img src="styles/legend/BANTEN_JAKARTA_JABAR_1_14.png" /> Kuningan<br />\
    <img src="styles/legend/BANTEN_JAKARTA_JABAR_1_15.png" /> Labuhan<br />\
    <img src="styles/legend/BANTEN_JAKARTA_JABAR_1_16.png" /> Lembang<br />\
    <img src="styles/legend/BANTEN_JAKARTA_JABAR_1_17.png" /> Majalengka<br />\
    <img src="styles/legend/BANTEN_JAKARTA_JABAR_1_18.png" /> Malangbong<br />\
    <img src="styles/legend/BANTEN_JAKARTA_JABAR_1_19.png" /> Malingping<br />\
    <img src="styles/legend/BANTEN_JAKARTA_JABAR_1_20.png" /> Rawadanau<br />\
    <img src="styles/legend/BANTEN_JAKARTA_JABAR_1_21.png" /> Serang-Tangerang<br />\
    <img src="styles/legend/BANTEN_JAKARTA_JABAR_1_22.png" /> Subang<br />\
    <img src="styles/legend/BANTEN_JAKARTA_JABAR_1_23.png" /> Sukabumi<br />\
    <img src="styles/legend/BANTEN_JAKARTA_JABAR_1_24.png" /> Sukamantri<br />\
    <img src="styles/legend/BANTEN_JAKARTA_JABAR_1_25.png" /> Sumber-Cirebon<br />\
    <img src="styles/legend/BANTEN_JAKARTA_JABAR_1_26.png" /> Sumedang<br />\
    <img src="styles/legend/BANTEN_JAKARTA_JABAR_1_27.png" /> Tasikmalaya<br />\
    <img src="styles/legend/BANTEN_JAKARTA_JABAR_1_28.png" /> <br />' });
var format_COBA_2 = new ol.format.GeoJSON();
var features_COBA_2 = format_COBA_2.readFeatures(json_COBA_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_COBA_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COBA_2.addFeatures(features_COBA_2);
cluster_COBA_2 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_COBA_2
});
var lyr_COBA_2 = new ol.layer.Vector({
                declutter: false,
                source:cluster_COBA_2, 
                style: style_COBA_2,
                popuplayertitle: 'COBA',
                interactive: true,
                title: '<img src="styles/legend/COBA_2.png" /> COBA'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_BANTEN_JAKARTA_JABAR_1.setVisible(true);lyr_COBA_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_BANTEN_JAKARTA_JABAR_1,lyr_COBA_2];
lyr_BANTEN_JAKARTA_JABAR_1.set('fieldAliases', {'NoCAT_IND': 'NoCAT_IND', 'NamaCAT_IN': 'NamaCAT_IN', 'Luas_Km2': 'Luas_Km2', 'Provinsi': 'Provinsi', 'AkBbsjuta_': 'AkBbsjuta_', 'AkTtknjuta': 'AkTtknjuta', 'VALUE': 'VALUE', });
lyr_COBA_2.set('fieldAliases', {'NO': 'NO', 'ID_Permoho': 'ID_Permoho', 'Evaluator': 'Evaluator', 'Verifikato': 'Verifikato', 'Jenis_Perm': 'Jenis_Perm', 'Nomor_Sumu': 'Nomor_Sumu', 'Nomor_Regi': 'Nomor_Regi', 'B_T': 'B_T', 'U_S': 'U_S', 'Nama_Perus': 'Nama_Perus', 'BANTEN_JAK': 'BANTEN_JAK', });
lyr_BANTEN_JAKARTA_JABAR_1.set('fieldImages', {'NoCAT_IND': 'TextEdit', 'NamaCAT_IN': 'TextEdit', 'Luas_Km2': 'TextEdit', 'Provinsi': 'TextEdit', 'AkBbsjuta_': 'TextEdit', 'AkTtknjuta': 'TextEdit', 'VALUE': 'Range', });
lyr_COBA_2.set('fieldImages', {'NO': 'TextEdit', 'ID_Permoho': 'TextEdit', 'Evaluator': 'TextEdit', 'Verifikato': 'TextEdit', 'Jenis_Perm': 'TextEdit', 'Nomor_Sumu': 'TextEdit', 'Nomor_Regi': 'TextEdit', 'B_T': 'TextEdit', 'U_S': 'TextEdit', 'Nama_Perus': 'TextEdit', 'BANTEN_JAK': 'Range', });
lyr_BANTEN_JAKARTA_JABAR_1.set('fieldLabels', {'NoCAT_IND': 'hidden field', 'NamaCAT_IN': 'inline label - always visible', 'Luas_Km2': 'hidden field', 'Provinsi': 'hidden field', 'AkBbsjuta_': 'hidden field', 'AkTtknjuta': 'hidden field', 'VALUE': 'hidden field', });
lyr_COBA_2.set('fieldLabels', {'NO': 'hidden field', 'ID_Permoho': 'hidden field', 'Evaluator': 'inline label - visible with data', 'Verifikato': 'inline label - visible with data', 'Jenis_Perm': 'hidden field', 'Nomor_Sumu': 'inline label - visible with data', 'Nomor_Regi': 'inline label - visible with data', 'B_T': 'hidden field', 'U_S': 'hidden field', 'Nama_Perus': 'inline label - visible with data', 'BANTEN_JAK': 'hidden field', });
lyr_COBA_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});