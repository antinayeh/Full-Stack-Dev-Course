```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: HTML Status Code 201 (created) JSON Content {{content: "antina", date: "2023-02-20..." }}
    deactivate server   
```
    
