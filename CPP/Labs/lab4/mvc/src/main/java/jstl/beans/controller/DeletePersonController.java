package jstl.beans.controller;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import jstl.beans.domain.Person;
import jstl.beans.service.PersonService;

@WebServlet("persons/delete")
public class DeletePersonController extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private PersonService personService = null;
       

    public DeletePersonController() {
        super();
    }


	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.getRequestDispatcher("/deleteForm.jsp").forward(request, response);
	}


	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		Person person = new Person();
		person.setId(Integer.parseInt(request.getParameter("age")));
		
		if(personService == null)
			personService = new PersonService();
		
		if(personService.add(person) == null) {
			//TODO: implement error
		}
		else {
			String ApplicationName = ((HttpServletRequest) request).getContextPath()
                    .replace("/", "");
			System.out.println(ApplicationName);
			response.sendRedirect("/" + ApplicationName + "/persons");
		}
	}

}
