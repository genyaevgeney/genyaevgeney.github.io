package cdi;

public class SampleServlet extends HttpServlet
{
    @Inject SampleBean bean;
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException
    {
        response.setContentType("text/html");
        response.setStatus(HttpServletResponse.SC_OK);
        response.getWriter().println(bean.getMessage());
    }
}
