package com.google.sps.servlets;

import java.io.IOException;
import com.google.gson.Gson;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList; // import the ArrayList class

/** Handles requests sent to the /hello URL. Try running a server and navigating to /hello! */
@WebServlet("/hello")
public class HelloWorldServlet extends HttpServlet {
  


  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    ArrayList<String> tina = new ArrayList<String>();
  tina.add("Hello Tina. I like oranges");
  tina.add("Hello Tina. I need to sleep more");
  tina.add("Hello Tina. I want to go to JAPAN");
  tina.add("𓁹‿𓁹 Heh!");
  
  String json = convertToJson(tina);
    response.setContentType("application/json;");
    response.getWriter().println(json);
  }

  private String convertToJson(ArrayList<String> tina) {
    Gson gson = new Gson();
    String json  = gson.toJson(tina);
    return json;
  }
}
