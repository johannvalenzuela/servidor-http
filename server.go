package main

import (
	"fmt"
	"net/http"
	"strings"
	"log"
)

func test(res http.ResponseWriter, req *http.Request){
	req.ParseForm()
	//fmt.Println(req.Form)
	//fmt.Println("path", req.URL.Path)
	//fmt.Println("scheme", req.URL.Scheme)
	for k, v := range req.Form {
		fmt.Println("key:", k)
		fmt.Println("val:", strings.Join(v,""))
	}
	
	res.Header().Set("Content-Type", "text/html")
	fmt.Println("/documentRoot/" + req.URL.Path[1:])
	http.ServeFile(res , req, "/documentRoot/" + req.URL.Path[1:])
	
	//fmt.Fprintf(res,"HOLAAAAA")
}

func main(){
	http.HandleFunc("/", test)
	err := http.ListenAndServe(":9100", nil)
	if err != nil {
		log.Fatal("ListenAndServe: ", err)
	}
}