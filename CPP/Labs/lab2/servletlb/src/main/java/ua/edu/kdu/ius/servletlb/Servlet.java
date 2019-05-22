package ua.edu.kdu.ius.servletlb;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class Servlet
 */
public class Servlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Servlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		StringBuilder resultHTML = new StringBuilder();
		resultHTML.append("<form method=\"POST\">");
		resultHTML.append("<input type=\"text\" name=\"name\" />");
		resultHTML.append("<input type=\"submit\" />");
		resultHTML.append("</form>");
		response.setContentType("text/html;charset=UTF-8");
		response.getWriter().append(resultHTML);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String name = request.getParameter("name");
		response.setContentType("text/html;charset=UTF-8");
		if(name == null)
			response.getWriter().append("No name parameter was passed");
		else
			response.getWriter().append("Passed name from form is " + name);
	}

}
