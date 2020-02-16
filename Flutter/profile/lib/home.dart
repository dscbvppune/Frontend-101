import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

class Home extends StatefulWidget {
  @override
  _HomeState createState() => _HomeState();
}

class _HomeState extends State<Home> {

  var name, email, profileImage;

  Future getDetails() async{
    var url = 'http://www.mocky.io/v2/5e46775c330000d64b0261ce';
    var result = await http.get(url);
    var body = json.decode(result.body.toString());
    name = body["name"];
    email = body["username"];
    profileImage = body["profile"];
    return body;
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(
          "Profile Screen",
          style: TextStyle(
            fontSize: 24
          ),
        ),
      ),
      body: Center(
        child: FutureBuilder(
          future: getDetails(),
          builder: (BuildContext context, AsyncSnapshot snapshot){
            if(snapshot.hasData){
              print(snapshot.data["profile"]);
              return Column(
                children: <Widget>[
                  SizedBox(
                    height: 64,
                  ),
                  CircleAvatar(
                    radius: 96,
                    backgroundImage: NetworkImage(
                      snapshot.data["profile"]
                    ),
                  ),
                  SizedBox(
                    height: 32,
                  ),
                  Text(
                    snapshot.data["name"],
                    style: TextStyle(
                      fontSize: 32
                    ),
                  ),
                  SizedBox(
                    height: 32,
                  ),
                  Text(
                    snapshot.data["username"],
                    style: TextStyle(
                      fontSize: 24
                    ),
                  ),
                  SizedBox(
                    height: 64,
                  )
                ],
              );
            }
            else{
              return Center(
                child: CircularProgressIndicator(),
              );
            }
          },
        ),
      )
    );
  }
}