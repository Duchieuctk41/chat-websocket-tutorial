package main

import (
	"github.com/user0608/mychat/internal"
	"log"
	"net/http"
)

func main() {
	log.Println("Websocket listening on : localhost:8080")
	ws := internal.NewWebSocketChat()
	http.HandleFunc("/chat", ws.HandlerConnextions)
	go ws.UsersManager()
	log.Fatal(http.ListenAndServe("localhost:8080", nil))
}
