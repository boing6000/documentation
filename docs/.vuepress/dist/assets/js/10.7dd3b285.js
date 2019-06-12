(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{213:function(a,e,r){"use strict";r.r(e);var t=r(2),s=Object(t.a)({},function(){var a=this,e=a.$createElement,r=a._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("h1",{attrs:{id:"avatars"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#avatars","aria-hidden":"true"}},[a._v("#")]),a._v(" Avatars")]),a._v(" "),r("p",[r("a",{attrs:{href:"https://github.styleci.io/repos/94704466",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://github.styleci.io/repos/94704466/shield?branch=master",alt:"StyleCI"}}),r("OutboundLink")],1),a._v(" "),r("a",{attrs:{href:"https://www.codacy.com/app/laravel-enso/avatars?utm_source=github.com&utm_medium=referral&utm_content=laravel-enso/avatars&utm_campaign=Badge_Grade",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://api.codacy.com/project/badge/Grade/d84efcf2530348d29f2ca573d06f7314",alt:"Codacy Badge"}}),r("OutboundLink")],1),a._v(" "),r("a",{attrs:{href:"https://packagist.org/packages/laravel-enso/avatars",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://poser.pugx.org/laravel-enso/avatars/license",alt:"License"}}),r("OutboundLink")],1),a._v(" "),r("a",{attrs:{href:"https://packagist.org/packages/laravel-enso/avatars",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://poser.pugx.org/laravel-enso/avatars/downloads",alt:"Total Downloads"}}),r("OutboundLink")],1),a._v(" "),r("a",{attrs:{href:"https://packagist.org/packages/laravel-enso/avatars",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://poser.pugx.org/laravel-enso/avatars/version",alt:"Latest Stable Version"}}),r("OutboundLink")],1)]),a._v(" "),r("p",[a._v("User Avatar manager dependency for "),r("a",{attrs:{href:"https://github.com/laravel-enso/Enso",target:"_blank",rel:"noopener noreferrer"}},[a._v("Laravel Enso"),r("OutboundLink")],1),a._v(".")]),a._v(" "),r("p",[a._v("This package works exclusively within the "),r("a",{attrs:{href:"https://github.com/laravel-enso/Enso",target:"_blank",rel:"noopener noreferrer"}},[a._v("Enso"),r("OutboundLink")],1),a._v(" ecosystem.")]),a._v(" "),r("p",[a._v("The front end assets that utilize this api are present in the "),r("a",{attrs:{href:"https://github.com/enso-ui/ui",target:"_blank",rel:"noopener noreferrer"}},[a._v("ui"),r("OutboundLink")],1),a._v(" package.")]),a._v(" "),r("p",[a._v("For live examples and demos, you may visit "),r("a",{attrs:{href:"https://www.laravel-enso.com",target:"_blank",rel:"noopener noreferrer"}},[a._v("laravel-enso.com"),r("OutboundLink")],1)]),a._v(" "),r("p",[r("a",{attrs:{href:"https://laravel-enso.github.io/avatars/videos/bulma_avatar_change.webm",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://laravel-enso.github.io/avatars/screenshots/bulma_cap001_thumb.png",alt:"Watch the demo"}}),r("OutboundLink")],1),a._v(" "),r("sup",[a._v("click on the photo to view a short demo in compatible browsers")])]),a._v(" "),r("h2",{attrs:{id:"installation"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#installation","aria-hidden":"true"}},[a._v("#")]),a._v(" Installation")]),a._v(" "),r("p",[a._v("Comes pre-installed in Enso.")]),a._v(" "),r("h2",{attrs:{id:"features"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#features","aria-hidden":"true"}},[a._v("#")]),a._v(" Features")]),a._v(" "),r("ul",[r("li",[a._v("comes with a table migration, in order to be able to store avatar related data")]),a._v(" "),r("li",[a._v("includes model, routes & controllers")]),a._v(" "),r("li",[a._v("creates a folder used to store the avatar files and a default avatar for users that do not have an avatar set")]),a._v(" "),r("li",[a._v("uses the "),r("a",{attrs:{href:"https://github.com/laravel-enso/FileManager",target:"_blank",rel:"noopener noreferrer"}},[a._v("File Manager"),r("OutboundLink")],1),a._v(" package for uploading the avatar files")]),a._v(" "),r("li",[a._v("uses the "),r("a",{attrs:{href:"https://github.com/laravel-enso/ImageTransformer",target:"_blank",rel:"noopener noreferrer"}},[a._v("Image Transformer"),r("OutboundLink")],1),a._v(" package for cropping and optimizing the avatar files")]),a._v(" "),r("li",[a._v("uses the "),r("a",{attrs:{href:"https://github.com/laravolt/avatar",target:"_blank",rel:"noopener noreferrer"}},[a._v("Laravolt Avatar"),r("OutboundLink")],1),a._v(" for generating avatars from user names")]),a._v(" "),r("li",[a._v("uses a policy to ensure that normal users can only modify their own avatars, while administrators can modify any avatar")])]),a._v(" "),r("h2",{attrs:{id:"notes-on-usage"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#notes-on-usage","aria-hidden":"true"}},[a._v("#")]),a._v(" Notes on usage")]),a._v(" "),r("p",[a._v("Since this package is using image processing libraries and these underlying libraries may use a lot of memory,\nespecially if the processed files are large (for example, for an 8MB image file, more than 128MB of memory might be used ),\nmake sure to configure php accordingly and/or do "),r("code",[a._v("ini_set(‘memory_limit’, ‘256M’);")])]),a._v(" "),r("p",[a._v("Failure to do so may result in silent errors if allotted memory is insufficient.")]),a._v(" "),r("h2",{attrs:{id:"commands"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#commands","aria-hidden":"true"}},[a._v("#")]),a._v(" Commands")]),a._v(" "),r("ul",[r("li",[r("code",[a._v("php artisan enso:avatars:generate")]),a._v(" - generates avatars for users which do not already have an avatar")])]),a._v(" "),r("h2",{attrs:{id:"publishes"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#publishes","aria-hidden":"true"}},[a._v("#")]),a._v(" Publishes")]),a._v(" "),r("ul",[r("li",[r("code",[a._v("php artisan vendor:publish --tag=avatars-storage")]),a._v(" - storage folder and default avatar")])]),a._v(" "),r("h2",{attrs:{id:"external-dependencies"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#external-dependencies","aria-hidden":"true"}},[a._v("#")]),a._v(" External dependencies")]),a._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/laravolt/avatar",target:"_blank",rel:"noopener noreferrer"}},[a._v("Laravolt Avatar"),r("OutboundLink")],1)])]),a._v(" "),r("h2",{attrs:{id:"contributions"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#contributions","aria-hidden":"true"}},[a._v("#")]),a._v(" Contributions")]),a._v(" "),r("p",[a._v("are welcome. Pull requests are great, but issues are good too.")]),a._v(" "),r("h2",{attrs:{id:"license"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#license","aria-hidden":"true"}},[a._v("#")]),a._v(" License")]),a._v(" "),r("p",[a._v("This package is released under the MIT license.")])])},[],!1,null,null,null);e.default=s.exports}}]);