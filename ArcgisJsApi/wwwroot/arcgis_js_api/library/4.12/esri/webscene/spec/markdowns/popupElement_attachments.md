# popupElement attachments

Configures attachments in popup elements.

### Properties

| Property | Details
| --- | ---
| displayType | A string value indicating how to display the attachment. If `list` is specified, attachments show as links.<br>If property is present, must be one of the following values: <ul><li>`preview`</li><li>`list`</li></ul>
| type | Type:`String`<br>Value of this property must be `attachments`


### Example

```json
{
  "popupElements": [
    {
      "type": "attachments",
      "displayType": "list"
    }
  ]
}
```

