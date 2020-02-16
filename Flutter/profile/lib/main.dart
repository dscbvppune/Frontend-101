import 'package:flutter/material.dart';
import 'package:profile/home.dart';

void main(){
  runApp(App());
}

class App extends StatelessWidget{
  @override
  Widget build(BuildContext context){
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: LoginScreen()
    );
  }
}

class LoginScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(
          "Login"
        ),
        centerTitle: true,
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: (){
          Navigator.push(
            context,
            MaterialPageRoute(builder: (BuildContext context) => Home())
          );
        },
        child: Icon(Icons.chevron_right),
      ),
    );
  }
}