# Material

The material used to shade the geometry.

### Properties

| Property | Details
| --- | ---
| [color](color.md) | Color is represented as a three or four-element array.
| transparency | A value between `100` (full transparency) and `0` (full opacity). Ignored if no color is specified.


### Example

```json
{
  "material": {
    "color": [
      255,
      0,
      0
    ],
    "transparency": 20
  }
}
```

