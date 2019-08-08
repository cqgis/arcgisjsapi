// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define(["../../core/JSONSupport","../../core/jsonMap"],function(b,a){a=new a.JSONMap({esriMeters:"meters",esriFeet:"feet",esriKilometers:"kilometers",esriMiles:"miles",esriNauticalMiles:"nautical-miles",esriYards:"yards"});return b.createSubclass({declaredClass:"esri.tasks.support.LinearUnit",properties:{distance:{value:0,json:{write:!0}},units:{value:null,json:{read:a.read,write:a.write}}}})});