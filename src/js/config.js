module.exports = [{
  "type": "heading",
  "defaultValue": "App Configuration"
},
{
  "type": "text",
  "defaultValue": "Here is some introductory text."
},
{
  "type": "section",
  "items": [{
          "type": "heading",
          "defaultValue": "Colors"
      },
      {
          "type": "color",
          "messageKey": "BackgroundColor",
          "defaultValue": "0x000000",
          "label": "Background Color"
      },
      {
          "type": "color",
          "messageKey": "ForegroundColor",
          "defaultValue": "0xFFFFFF",
          "label": "Foreground Color"
      },
      {
          "type": "input",
          "messageKey": "Email",
          "defaultValue": "test@example.org",
          "label": "email",
          "attributes": {
              "maxlength": 40
          }
      }
  ]
},
{
  "type": "section",
  "items": [{
          "type": "heading",
          "defaultValue": "More Settings"
      },
      {
          "type": "toggle",
          "messageKey": "SecondTick",
          "label": "Enable Seconds",
          "defaultValue": false
      },
      {
          "type": "toggle",
          "messageKey": "Animations",
          "label": "Enable Animations",
          "defaultValue": false
      }
  ]
},
{
  "type": "submit",
  "defaultValue": "Save Settings"
}
];