package main

import (
	"fmt"
	"net/http"
	"log"
)

func test(res http.ResponseWriter, req *http.Request){
	req.ParseForm()
	//fmt.Println(req.Form)
	//fmt.Println("path", req.URL.Path)
	//fmt.Println("scheme", req.URL.Scheme)
	//for k, v := range req.Form {
		//fmt.Println("key:", k)
		//fmt.Println("val:", strings.Join(v,""))
	//}
	staticDir := "/documentRoot"
	file := staticDir + req.URL.Path
	http.ServeFile(res, req, file)
	
	fmt.Println("/documentRoot" + req.URL.Path)
	
	
	//fmt.Fprintf(res,"HOLAAAAA")
}

func main(){
	http.HandleFunc("/", test)
	err := http.ListenAndServe(":9100", nil)
	if err != nil {
		log.Fatal("ListenAndServe: ", err)
	}
}