# Color Ramp Algorithmic

A colorRamp object is used to specify a range of colors that are applied to a group of symbols.

### Properties

| Property | Details
| --- | ---
| algorithm | Algorithm used for calculating the ramp.<br>If property is present, must be one of the following values: <ul><li>`esriHSVAlgorithm`</li><li>`esriCIELabAlgorithm`</li><li>`esriLabLChAlgorithm`</li></ul>
| [fromColor](color.md) | Array representing the initial color to start the ramp from.
| [toColor](color.md) | Array representing the final color to end the ramp with.
| type | Value indicating the type of colorRamp.<br>If property is present, value of this property must be `algorithmic`


### Example

```json
{
  "colorRamp": {
    "type": "algorithmic",
    "fromColor": [
      115,
      76,
      0,
      255
    ],
    "toColor": [
      255,
      25,
      86,
      255
    ],
    "algorithm": "esriHSVAlgorithm"
  }
}
```

