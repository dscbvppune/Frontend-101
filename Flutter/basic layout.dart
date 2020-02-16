import "package:flutter/material.dart";

void main(){
  runApp(
    Home()
  );
}

class Home extends StatelessWidget{
  
  @override
  Widget build(BuildContext context){
    return MaterialApp(
      home: App(),
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        primaryColor: Colors.orange,
        accentColor: Colors.orange,
        highlightColor: Colors.orange,
        focusColor: Colors.orange
      )
    );
  }
}

class App extends StatelessWidget{
  @override
  Widget build(BuildContext context){
    return Scaffold(
      appBar: AppBar(
        title: Text(
          "DSC BVP Pune",
          style: TextStyle(
            color: Colors.white,
            fontSize: 24,
          )
        ),
        centerTitle: true
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: (){
          print("Button pressed!");
        },
        child: Icon(Icons.favorite)
      )
    );
  }
}
