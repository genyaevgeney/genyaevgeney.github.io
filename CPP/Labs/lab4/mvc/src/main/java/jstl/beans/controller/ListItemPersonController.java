package jstl.beans.controller;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import jstl.beans.domain.Person;
import jstl.beans.service.PersonService;


@WebServlet("person")
public class ListItemPersonController extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	private PersonService personService = null;
       
    public ListItemPersonController() {
        super();
        // TODO Auto-generated constructor stub
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		if(personService == null)
			personService = new PersonService();
		
		List<Person> list = personService.getAll();
		request.setAttribute("list", list);
		request.getRequestDispatcher("/person.jsp").forward(request, response);
	}
}
