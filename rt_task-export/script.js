// Define study
const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "parameters": {},
  "plugins": [
    {
      "type": "lab.plugins.Metadata",
      "path": undefined
    },
    {
      "type": "lab.plugins.Transmit",
      "url": "backend.php",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "RT_task",
    "description": "",
    "repository": "",
    "contributors": ""
  },
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "この実験はPCで行なってください",
          "content": "画面上にアスタリスク（＊）が現れたら出来るだけ早くLキーを押してください。\n\n最初に練習をしていただきます。\n準備ができたらAキーを押して練習を始めてください。"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "始める →",
      "submitButtonPosition": "hidden",
      "files": {},
      "responses": {
        "keypress(a)": "start"
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Inst1"
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "": "0"
        },
        {
          "": "0"
        },
        {
          "": "0"
        },
        {
          "": "0"
        },
        {
          "": "0"
        },
        {
          "": "0"
        },
        {
          "": "0"
        },
        {
          "": "0"
        },
        {
          "": "0"
        },
        {
          "": "0"
        }
      ],
      "sample": {
        "mode": "draw-shuffle"
      },
      "files": {},
      "responses": {},
      "parameters": {},
      "messageHandlers": {},
      "title": "Loop",
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "responses": {},
        "parameters": {},
        "messageHandlers": {},
        "title": "Practice",
        "content": [
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 41.98,
                "height": 72.32,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "64",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {},
            "parameters": {},
            "messageHandlers": {},
            "title": "Fix",
            "timeout": "500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {},
            "parameters": {},
            "messageHandlers": {},
            "title": "blank",
            "timeout": "${ this.random.random() * 1500 + 1000 }"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 64,
                "height": 72.32,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "＊",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "64",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {
              "keypress(l)": "L"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Target",
            "timeout": "10000"
          }
        ]
      }
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "本番を始めます",
          "content": "画面上にアスタリスク（＊）が現れたら出来るだけ早くLキーを押してください。\n\n準備ができたらAキーを押して始めてください。"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "始める →",
      "submitButtonPosition": "hidden",
      "files": {},
      "responses": {
        "keypress(a)": "start"
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Inst2"
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "": "0"
        },
        {
          "": "0"
        },
        {
          "": "0"
        },
        {
          "": "0"
        },
        {
          "": "0"
        },
        {
          "": "0"
        },
        {
          "": "0"
        },
        {
          "": "0"
        },
        {
          "": "0"
        },
        {
          "": "0"
        }
      ],
      "sample": {
        "mode": "draw-shuffle"
      },
      "files": {},
      "responses": {},
      "parameters": {},
      "messageHandlers": {},
      "title": "Loop",
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "responses": {},
        "parameters": {},
        "messageHandlers": {},
        "title": "Pre",
        "content": [
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 41.98,
                "height": 72.32,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "64",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {},
            "parameters": {},
            "messageHandlers": {},
            "title": "Fix",
            "timeout": "500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {},
            "parameters": {},
            "messageHandlers": {},
            "title": "blank",
            "timeout": "${ this.random.random() * 1500 + 1000 }"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 64,
                "height": 72.32,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "＊",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "64",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {
              "keypress(l)": "L"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Target",
            "timeout": "10000"
          }
        ]
      }
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "休憩してください",
          "content": "1分後に画面が切り替わります"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "始める →",
      "submitButtonPosition": "hidden",
      "files": {},
      "responses": {},
      "parameters": {},
      "messageHandlers": {},
      "title": "Inst3",
      "timeout": "10000"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "実験を再開します",
          "content": "先ほどと同じように、画面上にアスタリスク（＊）が現れたら出来るだけ早くLキーを押してください。\n\n準備ができたらAキーを押して始めてください。"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "始める →",
      "submitButtonPosition": "hidden",
      "files": {},
      "responses": {
        "keypress(a)": "start"
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Inst4"
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "": "0"
        },
        {
          "": "0"
        },
        {
          "": "0"
        },
        {
          "": "0"
        },
        {
          "": "0"
        },
        {
          "": "0"
        },
        {
          "": "0"
        },
        {
          "": "0"
        },
        {
          "": "0"
        },
        {
          "": "0"
        }
      ],
      "sample": {
        "mode": "draw-shuffle"
      },
      "files": {},
      "responses": {},
      "parameters": {},
      "messageHandlers": {},
      "title": "Loop",
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "responses": {},
        "parameters": {},
        "messageHandlers": {},
        "title": "Test",
        "content": [
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 41.98,
                "height": 72.32,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "64",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {},
            "parameters": {},
            "messageHandlers": {},
            "title": "Fix",
            "timeout": "500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": "0",
                "top": "0",
                "angle": 0,
                "width": 249.39999999999998,
                "height": 150.51,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"item074.jpg\"] }",
                "autoScale": undefined
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "item074.jpg": "embedded\u002Faa6d83e56180c59cb2c1aa01a103a920ce482d7450dea89f7359f3aeaae2d6fe.jpg"
            },
            "responses": {},
            "parameters": {},
            "messageHandlers": {},
            "title": "Img",
            "timeout": "200"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {},
            "parameters": {},
            "messageHandlers": {},
            "title": "blank",
            "timeout": "${ this.random.random() * 1500 + 800 }"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 64,
                "height": 72.32,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "＊",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "64",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {
              "keypress(l)": "L"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Target",
            "timeout": "10000"
          }
        ]
      }
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "ありがとうございました。",
          "content": "これで実験は終了です。以下の「結果のダウンロード」ボタンを押すと結果をダウンロードできます。"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "結果のダウンロード→",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {},
      "parameters": {},
      "messageHandlers": {},
      "title": "Thanks"
    }
  ]
})

// Let's go!
study.run()