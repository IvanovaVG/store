!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.imageClientSDK=t():e.imageClientSDK=t()}(this,function(){return function(e){var t={};function a(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,a),r.l=!0,r.exports}return a.m=e,a.c=t,a.d=function(e,t,i){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(i,r,function(t){return e[t]}.bind(null,r));return i},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=15)}([function(e,t,a){"use strict";var i={JPG:"jpg",JPEG:"jpeg",PNG:"png",WEBP:"webp",WIX_ICO_MP:"wix_ico_mp",WIX_MP:"wix_mp",GIF:"gif",SVG:"svg",UNRECOGNIZED:"unrecognized"},r=[i.JPG,i.JPEG,i.PNG,i.GIF,i.WEBP];e.exports={alignTypes:{CENTER:"center",TOP:"top",TOP_LEFT:"top_left",TOP_RIGHT:"top_right",BOTTOM:"bottom",BOTTOM_LEFT:"bottom_left",BOTTOM_RIGHT:"bottom_right",LEFT:"left",RIGHT:"right"},alignTypesMap:{center:"c",top:"t",top_left:"tl",top_right:"tr",bottom:"b",bottom_left:"bl",bottom_right:"br",left:"l",right:"r"},transformTypes:{FIT:"fit",FILL:"fill",FILL_FOCAL:"fill_focal",CROP:"crop",LEGACY_CROP:"legacy_crop",LEGACY_FILL:"legacy_fill"},fittingTypes:{SCALE_TO_FILL:"fill",SCALE_TO_FIT:"fit",STRETCH:"stretch",ORIGINAL_SIZE:"original_size",TILE:"tile",TILE_HORIZONTAL:"tile_horizontal",TILE_VERTICAL:"tile_vertical",FIT_AND_TILE:"fit_and_tile",LEGACY_STRIP_TILE:"legacy_strip_tile",LEGACY_STRIP_TILE_HORIZONTAL:"legacy_strip_tile_horizontal",LEGACY_STRIP_TILE_VERTICAL:"legacy_strip_tile_vertical",LEGACY_STRIP_SCALE_TO_FILL:"legacy_strip_fill",LEGACY_STRIP_SCALE_TO_FIT:"legacy_strip_fit",LEGACY_STRIP_FIT_AND_TILE:"legacy_strip_fit_and_tile",LEGACY_STRIP_ORIGINAL_SIZE:"legacy_strip_original_size",LEGACY_ORIGINAL_SIZE:"actual_size",LEGACY_FIT_WIDTH:"fitWidth",LEGACY_FIT_HEIGHT:"fitHeight",LEGACY_FULL:"full",LEGACY_BG_FIT_AND_TILE:"legacy_tile",LEGACY_BG_FIT_AND_TILE_HORIZONTAL:"legacy_tile_horizontal",LEGACY_BG_FIT_AND_TILE_VERTICAL:"legacy_tile_vertical",LEGACY_BG_NORMAL:"legacy_normal"},htmlTag:{BG:"bg",IMG:"img",SVG:"svg"},upscaleMethods:{AUTO:"auto",CLASSIC:"classic",SUPER:"super"},upscaleMethodsValues:{classic:1,super:2},defaultUSM:{radius:.66,amount:1,threshold:.01},emptyData:{uri:"",css:{img:{},container:{}},attr:{img:{},container:{}}},imageQuality:{HIGH:"HIGH",MEDIUM:"MEDIUM",LOW:"LOW",TINY:"TINY"},imageScaleDefaults:{HIGH:{size:196e4,quality:90,maxUpscale:1},MEDIUM:{size:36e4,quality:85,maxUpscale:1},LOW:{size:16e4,quality:80,maxUpscale:1.2},TINY:{size:0,quality:80,maxUpscale:1.4}},fileType:i,supportedExtensions:r,webp:{LOSSLESS:"lossless",LOSSY:"lossy",ALPHA:"alpha",ANIMATION:"animation"},SAFE_TRANSFORMED_AREA:25e6,SUPER_UPSCALE_MODELS:[1.5,2,4],MAX_DEVICE_PIXEL_RATIO:2,API_VERSION:"v1"}},function(e,t,a){"use strict";var i=a(2),r=a(0),n=a(4);function s(e){var t=new window.Image;t.onload=function(){var a=n.getFeature("isWEBP");a[e]=t.width>0&&t.height>0,n.setFeature("isWEBP",a)},t.src="data:image/webp;base64,"+{lossy:"UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",lossless:"UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",alpha:"UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",animation:"UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"}[e]}function o(e){var t=[r.fileType.PNG,r.fileType.JPEG,r.fileType.JPG,r.fileType.WIX_ICO_MP,r.fileType.WIX_MP];return i.includes(t,u(e))}function l(e){return i.includes(["webp"],u(e))}function c(e){return/(^https?)|(^data)|(^\/\/)/.test(e)}function u(e){return(/[.]([^.]+)$/.exec(e)&&/[.]([^.]+)$/.exec(e)[1]||"").toLowerCase()}function p(e,t,a,i,n){return n===r.transformTypes.FILL?function(e,t,a,i){return Math.max(a/e,i/t)}(e,t,a,i):n===r.transformTypes.FIT?function(e,t,a,i){return Math.min(a/e,i/t)}(e,t,a,i):1}function h(e,t){var a=T(e,t);return{optimizedScaleFactor:r.imageScaleDefaults[a].maxUpscale,upscaleMethodValue:r.upscaleMethodsValues.classic,forceUSM:!1}}function f(e,t){var a=T(e,t);return{optimizedScaleFactor:r.imageScaleDefaults[a].maxUpscale,upscaleMethodValue:r.upscaleMethodsValues.classic,forceUSM:!1}}function g(e,t,a){return{optimizedScaleFactor:i.last(r.SUPER_UPSCALE_MODELS),upscaleMethodValue:r.upscaleMethodsValues.super,forceUSM:!(r.SUPER_UPSCALE_MODELS.includes(a)||a>i.last(r.SUPER_UPSCALE_MODELS))}}function T(e,t){var a=e*t;return a>r.imageScaleDefaults[r.imageQuality.HIGH].size?r.imageQuality.HIGH:a>r.imageScaleDefaults[r.imageQuality.MEDIUM].size?r.imageQuality.MEDIUM:a>r.imageScaleDefaults[r.imageQuality.LOW].size?r.imageQuality.LOW:r.imageQuality.TINY}function A(e,t){var a=Math.pow(10,t||0);return(e*a/a).toFixed(parseInt(t,10))}e.exports={populateGlobalFeatureSupport:function(){"undefined"!=typeof window&&(s(r.webp.LOSSY),s(r.webp.LOSSLESS),s(r.webp.ALPHA),s(r.webp.ANIMATION),n.setFeature("isObjectFitBrowser",function(e){return e in window.document.documentElement.style}("objectFit")))},isWEBPBrowserSupport:function(e){var t=n.getFeature("isWEBP"),a=e===r.fileType.JPG&&t[r.webp.LOSSY],i=e===r.fileType.PNG&&t[r.webp.LOSSLESS],s=e===r.fileType.PNG&&t[r.webp.ALPHA];return a||i&&s},isObjectFitBrowserSupport:function(){return n.getFeature("isObjectFitBrowser")},isImageTransformApplicable:function(e){return o(e)&&!c(e)},isValidRequest:function(e,t,a){return a&&t&&!function(e){return!e||!e.trim()||"none"===e.toLowerCase()}(t.id)&&i.includes(r.fittingTypes,e)},isImageTypeSupported:o,isExternalUrl:c,isWEBP:l,getFileType:function(e){return function(e){return i.includes(["jpg","jpeg"],u(e))}(e)?r.fileType.JPG:function(e){return i.includes(["png"],u(e))}(e)?r.fileType.PNG:l(e)?r.fileType.WEBP:r.fileType.UNRECOGNIZED},getFileExtension:u,getFileName:function(e,t){var a=/\.([^.]*)$/;if("string"==typeof t&&t.length){var n=["/","\\","#","^","?","{","}","<",">","|","`","“",":",'"'].map(encodeURIComponent),s=new RegExp("("+n.concat(["\\.","\\*"]).join("|")+")","g"),o=t,l=t.match(a);return l&&i.includes(r.supportedExtensions,l[1])&&(o=t.replace(a,"")),encodeURIComponent(o).replace(s,"_")}var c=e.match(/\/(.*?)$/);return(c?c[1]:e).replace(a,"")},getAlignedRect:function(e,t,a){var i=void 0,n=void 0;switch(a){case r.alignTypes.CENTER:i=Math.max(0,(e.width-t.width)/2),n=Math.max(0,(e.height-t.height)/2);break;case r.alignTypes.TOP:i=Math.max(0,(e.width-t.width)/2),n=0;break;case r.alignTypes.TOP_LEFT:i=0,n=0;break;case r.alignTypes.TOP_RIGHT:i=Math.max(0,e.width-t.width),n=0;break;case r.alignTypes.BOTTOM:i=Math.max(0,(e.width-t.width)/2),n=Math.max(0,e.height-t.height);break;case r.alignTypes.BOTTOM_LEFT:i=0,n=Math.max(0,e.height-t.height);break;case r.alignTypes.BOTTOM_RIGHT:i=Math.max(0,e.width-t.width),n=Math.max(0,e.height-t.height);break;case r.alignTypes.LEFT:i=0,n=Math.max(0,(e.height-t.height)/2);break;case r.alignTypes.RIGHT:i=Math.max(0,e.width-t.width),n=Math.max(0,(e.height-t.height)/2)}return{x:e.x?e.x+i:i,y:e.y?e.y+n:n,width:Math.min(e.width,t.width),height:Math.min(e.height,t.height)}},getOverlappingRect:function(e,t){var a=Math.max(0,Math.min(e.width,t.x+t.width)-Math.max(0,t.x)),i=Math.max(0,Math.min(e.height,t.y+t.height)-Math.max(0,t.y));return a&&i&&(e.width!==a||e.height!==i)?{x:Math.max(0,t.x),y:Math.max(0,t.y),width:a,height:i}:null},getScaleFactor:p,getTransformData:function(e,t,a,i,n){e=e||a.width,t=t||a.height;var s=function(e){return Math.min(e.pixelAspectRatio||1,r.MAX_DEVICE_PIXEL_RATIO)}(a),o=function(e,t,a,i,n){var s=void 0,o=void 0,l=void 0;if(s=p(e,t,a,i,n),n===r.transformTypes.FILL?(o=a,l=i):n===r.transformTypes.FIT&&(o=e*s,l=t*s),o*l>r.SAFE_TRANSFORMED_AREA){var c=Math.sqrt(r.SAFE_TRANSFORMED_AREA/(o*l));s=p(e,t,o*=c,l*=c,n)}return{scaleFactor:s,width:o,height:l}}(e,t,a.width*s,a.height*s,i),l=o.scaleFactor;return function(e,t,a,i,n,s,o){var l=function(e,t,a,i){return{classic:h,auto:f,super:g}[i](e,t,a)}(e,t,s,n),c=l.optimizedScaleFactor,u=l.upscaleMethodValue,p=l.forceUSM;if(s<=c)return{width:a,height:i,scaleFactor:s,upscaleMethodValue:u,forceUSM:p,cssUpscaleNeeded:!1};var T=void 0,A=void 0;switch(o){case r.transformTypes.FILL:T=a*(c/s),A=i*(c/s);break;case r.transformTypes.FIT:T=e*c,A=t*c}return{width:T,height:A,scaleFactor:c,upscaleMethodValue:u,forceUSM:p,cssUpscaleNeeded:!0}}(e,t,o.width,o.height,n,l,i)},getAlignment:function(e){return r.alignTypesMap[e.alignment]||r.alignTypesMap[r.alignTypes.CENTER]},getPreferredImageQuality:function(e,t){return r.imageScaleDefaults[T(e,t)].quality},getDimension:function(e,t,a,i,r){var n=p(e,t,a,i,r);return{width:Math.round(e*n),height:Math.round(t*n)}},getFocalPoint:function(e){var t=null;return"number"==typeof e.x&&"number"==typeof e.y&&(t={x:A(Math.max(0,Math.min(100,e.x))/100,2),y:A(Math.max(0,Math.min(100,e.y))/100,2)}),t},getUpscaleString:function(e){return e&&e.upscaleMethod&&"string"==typeof e.upscaleMethod&&r.upscaleMethods[e.upscaleMethod.toUpperCase()]||r.upscaleMethods.AUTO},roundToFixed:A}},function(e,t,a){"use strict";var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};e.exports={assign:function(){for(var e=arguments[0]||{},t=Array.prototype.slice.call(arguments,1,arguments.length),a=0;a<t.length;a++){var i=t[a];for(var r in i)i.hasOwnProperty(r)&&(e[r]=i[r])}return e},includes:function(e,t){return e.indexOf?e.indexOf(t)>-1:!(!e||"object"!==(void 0===e?"undefined":i(e)))&&Object.keys(e).some(function(a){return e[a]===t})},last:function(e){return e[e.length-1]},template:function(e){return function(t){var a=e;for(var i in t)t.hasOwnProperty(i)&&(a=a.replace(new RegExp("\\${"+i+"}","g"),t[i]));return a}}}},function(e,t,a){"use strict";var i=a(1),r=a(5),n=a(6);e.exports=function(e,t,a,s){var o=i.getFileType(t.id),l={fileName:i.getFileName(t.id,t.name),fileExtension:i.getFileExtension(t.id),fileType:o,isWEBPSupport:i.isWEBPBrowserSupport(o),fittingType:e,src:{id:t.id,width:t.width,height:t.height,isCropped:!1},focalPoint:{x:t.focalPoint&&t.focalPoint.x,y:t.focalPoint&&t.focalPoint.y},quality:0,upscaleMethod:i.getUpscaleString(s),progressive:!0,unsharpMask:{},watermark:"",parts:[]};return i.isImageTransformApplicable(t.id)&&(r.setTransformParts(l,t,a),n.setTransformOptions(l,s)),l}},function(e,t,a){"use strict";var i={isWEBP:{lossless:!1,lossy:!1,alpha:!1,animation:!1},isObjectFitBrowser:!1};e.exports={getFeature:function(e){return i[e]},setFeature:function(e,t){i[e]=t}}},function(e,t,a){"use strict";var i=a(2),r=a(0),n=a(1);function s(e,t){var a=n.getTransformData(e.src.width,e.src.height,t,r.transformTypes.FIT,e.upscaleMethod);return{transformType:r.transformTypes.FILL,width:Math.round(a.width),height:Math.round(a.height),alignment:r.alignTypesMap.center,upscale:a.scaleFactor>1,forceUSM:a.forceUSM,scaleFactor:a.scaleFactor,cssUpscaleNeeded:a.cssUpscaleNeeded,upscaleMethodValue:a.upscaleMethodValue}}function o(e){return{transformType:r.transformTypes.CROP,x:Math.round(e.x),y:Math.round(e.y),width:Math.round(e.width),height:Math.round(e.height),upscale:!1,forceUSM:!1,scaleFactor:1,cssUpscaleNeeded:!1}}e.exports={setTransformParts:function(e,t,a){var l=void 0;switch(t.crop&&(l=n.getOverlappingRect(t,t.crop))&&(e.src.width=l.width,e.src.height=l.height,e.src.cropped=!0,e.parts.push(o(l))),e.fittingType){case r.fittingTypes.SCALE_TO_FIT:case r.fittingTypes.LEGACY_FIT_WIDTH:case r.fittingTypes.LEGACY_FIT_HEIGHT:case r.fittingTypes.LEGACY_FULL:case r.fittingTypes.FIT_AND_TILE:case r.fittingTypes.LEGACY_BG_FIT_AND_TILE:case r.fittingTypes.LEGACY_BG_FIT_AND_TILE_HORIZONTAL:case r.fittingTypes.LEGACY_BG_FIT_AND_TILE_VERTICAL:case r.fittingTypes.LEGACY_BG_NORMAL:e.parts.push(s(e,a));break;case r.fittingTypes.SCALE_TO_FILL:e.parts.push(function(e,t){var a=n.getTransformData(e.src.width,e.src.height,t,r.transformTypes.FILL,e.upscaleMethod),i=n.getFocalPoint(e.focalPoint);return{transformType:i?r.transformTypes.FILL_FOCAL:r.transformTypes.FILL,width:Math.round(a.width),height:Math.round(a.height),alignment:n.getAlignment(t),focalPointX:i&&i.x,focalPointY:i&&i.y,upscale:a.scaleFactor>1,forceUSM:a.forceUSM,scaleFactor:a.scaleFactor,cssUpscaleNeeded:a.cssUpscaleNeeded,upscaleMethodValue:a.upscaleMethodValue}}(e,a));break;case r.fittingTypes.STRETCH:e.parts.push(function(e,t){var a=n.getScaleFactor(e.src.width,e.src.height,t.width,t.height,r.transformTypes.FILL),o=i.assign({},t);return o.width=e.src.width*a,o.height=e.src.height*a,s(e,o)}(e,a));break;case r.fittingTypes.TILE_HORIZONTAL:case r.fittingTypes.TILE_VERTICAL:case r.fittingTypes.TILE:case r.fittingTypes.LEGACY_ORIGINAL_SIZE:case r.fittingTypes.ORIGINAL_SIZE:l=n.getAlignedRect(e.src,a,a.alignment),e.src.isCropped?(i.assign(e.parts[0],l),e.src.width=l.width,e.src.height=l.height):e.parts.push(o(l));break;case r.fittingTypes.LEGACY_STRIP_TILE_HORIZONTAL:case r.fittingTypes.LEGACY_STRIP_TILE_VERTICAL:case r.fittingTypes.LEGACY_STRIP_TILE:case r.fittingTypes.LEGACY_STRIP_ORIGINAL_SIZE:e.parts.push(function(e){return{transformType:r.transformTypes.LEGACY_CROP,width:Math.round(e.width),height:Math.round(e.height),alignment:n.getAlignment(e),upscale:!1,forceUSM:!1,scaleFactor:1,cssUpscaleNeeded:!1}}(a));break;case r.fittingTypes.LEGACY_STRIP_SCALE_TO_FIT:case r.fittingTypes.LEGACY_STRIP_FIT_AND_TILE:e.parts.push(function(e){return{transformType:r.transformTypes.FIT,width:Math.round(e.width),height:Math.round(e.height),upscale:!1,forceUSM:!0,scaleFactor:1,cssUpscaleNeeded:!1}}(a));break;case r.fittingTypes.LEGACY_STRIP_SCALE_TO_FILL:e.parts.push(function(e){return{transformType:r.transformTypes.LEGACY_FILL,width:Math.round(e.width),height:Math.round(e.height),alignment:n.getAlignment(e),upscale:!1,forceUSM:!0,scaleFactor:1,cssUpscaleNeeded:!1}}(a))}}}},function(e,t,a){"use strict";var i=a(2),r=a(0),n=a(1);e.exports={setTransformOptions:function(e,t){t=t||{},e.quality=function(e,t){var a=i.last(e.parts),r=n.getPreferredImageQuality(a.width,a.height),s=t.quality&&t.quality>=5&&t.quality<=90?t.quality:r;return parseInt(s,10)}(e,t),e.unsharpMask=function(e,t){var a=void 0;return!function(e){var t=void 0!==(e=e||{}).radius&&e.radius>=.1&&e.radius<=500,a=void 0!==e.amount&&e.amount>=0&&e.amount<=10,i=void 0!==e.threshold&&e.threshold>=0&&e.threshold<=255;return t&&a&&i}(t.unsharpMask)?function(e){return void 0!==(e=e||{}).radius&&0===e.radius&&void 0!==e.amount&&0===e.amount&&void 0!==e.threshold&&0===e.threshold}(t.unsharpMask)||function(e){var t=i.last(e.parts);return!(t.scaleFactor>=1)||t.forceUSM}(e)&&(a=r.defaultUSM):a={radius:t.unsharpMask.radius,amount:t.unsharpMask.amount,threshold:t.unsharpMask.threshold},a&&(a.radius=n.roundToFixed(a.radius,2),a.amount=n.roundToFixed(a.amount,2),a.threshold=n.roundToFixed(a.threshold,2)),a}(e,t),e.progressive=function(e){return!1!==e.progressive}(t),e.watermark=function(e){return e.watermark}(t)}}},function(e,t,a){"use strict";var i=a(0),r=a(1),n=a(8),s=a(3);e.exports=function(e,t,a,o,l){var c=i.emptyData.uri;return r.isImageTransformApplicable(t.id)?(l=l||s(e,t,a,o,l),c=n.getImageURI(l)):c=t.id,c}},function(e,t,a){"use strict";var i=a(2),r=a(0),n=i.template("fit/w_${width},h_${height}"),s=i.template("fill/w_${width},h_${height},al_${alignment}"),o=i.template("fill/w_${width},h_${height},fp_${focalPointX}_${focalPointY}"),l=i.template("crop/x_${x},y_${y},w_${width},h_${height}"),c=i.template("crop/w_${width},h_${height},al_${alignment}"),u=i.template("fill/w_${width},h_${height},al_${alignment}"),p=i.template(",lg_${upscaleMethodValue}"),h=i.template(",q_${quality}"),f=i.template(",usm_${radius}_${amount}_${threshold}"),g=i.template(",bl"),T=i.template(",wm_${watermark}");e.exports={getImageURI:function(e){var t=[];e.parts.forEach(function(e){switch(e.transformType){case r.transformTypes.CROP:t.push(l(e));break;case r.transformTypes.LEGACY_CROP:t.push(c(e));break;case r.transformTypes.LEGACY_FILL:var a=u(e);e.upscale&&(a+=p(e)),t.push(a);break;case r.transformTypes.FIT:var i=n(e);e.upscale&&(i+=p(e)),t.push(i);break;case r.transformTypes.FILL:var h=s(e);e.upscale&&(h+=p(e)),t.push(h);break;case r.transformTypes.FILL_FOCAL:var f=o(e);e.upscale&&(f+=p(e)),t.push(f)}});var a=t.join("/");return(e.fileType===r.fileType.PNG&&e.isWEBPSupport||e.fileType===r.fileType.JPG)&&(a+=h(e)),e.unsharpMask&&(a+=f(e.unsharpMask)),e.progressive||(a+=g(e)),e.watermark&&(a+=T(e)),e.src.id+"/"+r.API_VERSION+"/"+a+"/"+e.fileName+"."+(e.isWEBPSupport?"webp":e.fileExtension)}}},,,,,,,function(e,t,a){"use strict";var i=a(16),r=a(0);i.populateGlobalFeatureSupport();var n="https://static.wixstatic.com/",s="https://static.wixstatic.com/media/",o=/^media\//i;function l(e){return o.test(e)?""+n+e:""+s+e}e.exports={getScaleToFitImageURL:function(e,t,a,n,s,o){return l(i.getData(r.fittingTypes.SCALE_TO_FIT,{id:e,width:t,height:a,name:o&&o.name},{width:n,height:s,htmlTag:i.htmlTag.IMG,alignment:i.alignTypes.CENTER,pixelAspectRatio:window.devicePixelRatio},o).uri)},getScaleToFillImageURL:function(e,t,a,n,s,o){return l(i.getData(r.fittingTypes.SCALE_TO_FILL,{id:e,width:t,height:a,name:o&&o.name,focalPoint:{x:o&&o.focalPoint&&o.focalPoint.x,y:o&&o.focalPoint&&o.focalPoint.y}},{width:n,height:s,htmlTag:i.htmlTag.IMG,alignment:i.alignTypes.CENTER,pixelAspectRatio:window.devicePixelRatio},o).uri)},getCropImageURL:function(e,t,a,n,s,o,c,u,p,h){return l(i.getData(r.fittingTypes.SCALE_TO_FILL,{id:e,width:t,height:a,name:h&&h.name,crop:{x:n,y:s,width:o,height:c}},{width:u,height:p,htmlTag:i.htmlTag.IMG,alignment:i.alignTypes.CENTER,pixelAspectRatio:window.devicePixelRatio},h).uri)}}},function(e,t,a){"use strict";var i=a(0),r=a(1),n=a(7);e.exports={populateGlobalFeatureSupport:r.populateGlobalFeatureSupport,getData:function(e,t,a,s){var o=i.emptyData.uri;return r.isValidRequest(e,t,a)&&(o=n(e,t,a,s)),{uri:o}},fittingTypes:i.fittingTypes,alignTypes:i.alignTypes,htmlTag:i.htmlTag,upscaleMethods:i.upscaleMethods}}])});
//# sourceMappingURL=imageClientSDK.js.map