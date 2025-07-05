export default {
  extends: ["stylelint-config-standard"],
  rules: {
     "selector-class-pattern": null,
    "length-zero-no-unit": null,
    "property-no-unknown": [true, {
      ignoreProperties: ["composes"]
    }]
  }
};