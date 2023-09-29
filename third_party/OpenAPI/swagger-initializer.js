window.onload = function() {
  //<editor-fold desc="Changeable Configuration Block">

  // the following lines will be replaced by docker/configurator, when it runs in a docker-container
  window.ui = SwaggerUIBundle({
    urls: [{"url":"auth/v1/auth.swagger.json","name":"auth/v1/auth.swagger.json"},{"url":"google/api/httpbody.swagger.json","name":"google/api/httpbody.swagger.json"},{"url":"google/api/annotations.swagger.json","name":"google/api/annotations.swagger.json"},{"url":"google/api/field_behavior.swagger.json","name":"google/api/field_behavior.swagger.json"},{"url":"google/api/http.swagger.json","name":"google/api/http.swagger.json"},{"url":"protoc-gen-openapiv2/options/openapiv2.swagger.json","name":"protoc-gen-openapiv2/options/openapiv2.swagger.json"},{"url":"protoc-gen-openapiv2/options/annotations.swagger.json","name":"protoc-gen-openapiv2/options/annotations.swagger.json"}],
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout"
  });

  //</editor-fold>
};
