'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "6935292cac978c9cfe5a78da75b39c54",
".git/config": "0d530eb5f9729aaf2071986615127079",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "00b5b44d1f4df0e435077e9077625626",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3051f3adbb3392a286d5a131c02a2eb4",
".git/logs/refs/heads/master": "3051f3adbb3392a286d5a131c02a2eb4",
".git/logs/refs/remotes/origin/master": "af62f3aec75b6721a0026743af56c557",
".git/objects/04/545bc9e02d99c2a4c2e2046ba6ee6e9da21ed9": "d526ea7a7dcfb83307ddca346523cf31",
".git/objects/0c/2c2f23644edbdffad4cca0b11e0a8be0a24861": "f921db4da508eac307401fef93d988c0",
".git/objects/10/4565619b8a6c4358c5b47a7789e024c561f0b8": "154965e80cf86ece8b506da16fc1fea8",
".git/objects/2a/9ba3482eaa41ad988ec293ce29635705932367": "0fa095fbd1b82c0a01926a97b96da538",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4d/d42f6f2da77a6527a25df5f17e4e32ff903ea9": "e79adf4c679f45d398850ce342ce8040",
".git/objects/52/a72e739d353e736596fb1376539228f1d164d3": "bda5ce1cd4223b48d58fe7e9f0ddd0c1",
".git/objects/60/3dc795d8184e111c96ffe7404ca23399712855": "63bde748a90718a670c900d3a37d103f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/87/66c6383d6a0393f0409296cd641f3d5625f3a6": "8c94fd7fe963f2b8de4ed0c8be3d3ea3",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/94/f91b1e4813c91669cfa3f75b40611e6f17c4aa": "c1fb301066af10313f8ac06bb5b3184b",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/181226061a4843135341e0eb26782b28c663bb": "ea47a6eb4edff9a1887552bed4c0aaef",
".git/objects/a5/b8b4f6a379570562267314b02e29240c02079f": "261cc213a2fd1e4f5aafb1da251cae3b",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/af/58bfed476f489cb1588bfbb71af18327a5ed16": "aef1d993d0cf1a307eb4a1217541437c",
".git/objects/af/f327820cc59db7e1f280c421bd0657390c2552": "4bb8af00a546200d3687071501bdbaa8",
".git/objects/b0/8b9f9e3e334c4cd7759445d4133aeb3359856e": "bf4c63e93f2617cd2ac668a2bee82edf",
".git/objects/b2/b95f4a95d999041d72381026fc8d8beaba6005": "b91f1c701ee3b64a935d12bd8cab937e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c1/654d0682b277b9ddec69491d34e3803fd8745d": "660b055555b420c08827cc695c0c6615",
".git/objects/c4/7dd83d61ac729758549a5c14832e9eeb0f36ab": "a63fae3f09909b4c4b54ae5c739a2c95",
".git/objects/c6/6b9a8002f62e1614f0ba7b759d54bdf0221ce3": "fc246386d2ec72e22754af1b64ef0a00",
".git/objects/c6/e9a6d5fbdc65c0ef1a64a9e184822c66b7696a": "65fc9f5eaf3aed7c0af852962f311b70",
".git/objects/c8/f1b1472f1afc5a2435dbdf5060eb0f713a8cfe": "983145adb54368514980b9bfd3b4a56c",
".git/objects/cf/e5937cf5b23165342b20bfaf4f56371dfe8fba": "ebc8d860f1b3c02ff531265dce5c9239",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/de/64ad81823292b7b8a6df28582729239aa5358e": "1161d2ebdf02efb4755279be09efd9ca",
".git/objects/e4/8ddd413f3643f35f8c75d2706de664e860208e": "eb59b5ae7f17279ac936c6ff8ced9d4f",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e8/41a49ad775655b92a7778501eb5d30fab56b06": "5aa213b7433d0da22bddbbe864bc1525",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/refs/heads/master": "bf424c23a279c666af94446ec13b1a68",
".git/refs/remotes/origin/master": "bf424c23a279c666af94446ec13b1a68",
"assets/AssetManifest.json": "fb9c0ae72c5a2570b141619e60e69faf",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/images/Alex.jpg": "2b83b9abbe4b63f8d43400b3493581bb",
"assets/images/APPList.jpg": "b8454f3b9f475e789bfaa97be598b355",
"assets/images/capacity.jpg": "76e0ca1eebabe62bc923cb924adee833",
"assets/images/contracts.jpg": "2b2ade854825665f695c32ca4debe66a",
"assets/images/knowledge.jpg": "c4061b3c1716eb3727c6929cb187e68c",
"assets/images/license.jpg": "54ef1e261c954e1c7ccbe6732c6924ab",
"assets/images/overview.jpg": "d060d597aeec8c7458e9d1263995c6aa",
"assets/images/project.png": "ea620486e6f5e15ac2147401354fb45f",
"assets/images/RF.jpg": "633d13e24fac1e5d16354290947f3861",
"assets/images/ta1.jpg": "05a65d1840b0980b5f850c53d3151f4c",
"assets/images/tco.jpg": "d1e127d2376ddd56dc7ba6d12cd2bd52",
"assets/NOTICES": "36e54b70849882f6dbb8398ed38036cd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "5cf7c39f52bd5eecca66d892ff9866f9",
"/": "5cf7c39f52bd5eecca66d892ff9866f9",
"main.dart.js": "50ae3a0c1fde2b33e2027b3089454cbf",
"manifest.json": "002ae7436c1fe5166f191a24372ec211",
"version.json": "63e8b10fc2077885f99a7cbabe6fcb71"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
