package nl.bioinf.servlets;
import nl.bioinf.config.WebConfig;
import org.thymeleaf.context.WebContext;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet(name = "FillInServlet", urlPatterns = "/fill", loadOnStartup = 1)
/**
 * FillIn 'class', a servlet to use for the fill-in game
 */
public class FillInServlet extends HttpServlet {
    @Override
    public void init() throws ServletException {
        System.out.println("Initializing Thymeleaf template engine");
        final ServletContext servletContext = this.getServletContext();
        WebConfig.createTemplateEngine(servletContext);
    }
    private static final long serialVersionUID = 1L;

    /**
     * @param request, response
     *     generates the response within the fill_in_blanks html page for post requests
     */
    public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException{
        WebConfig.configureResponse(response);
        WebContext ctx = new WebContext(
                request,
                response,
                request.getServletContext(),
                request.getLocale());
        WebConfig.createTemplateEngine(getServletContext()).
                process("fill_in_blanks", ctx, response.getWriter());
    }

    /**
     * @param request, response
     *     generates the response within the fill_in_blanks html page for get requests
     */
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException{
        WebConfig.configureResponse(response);
        WebContext ctx = new WebContext(
                request,
                response,
                request.getServletContext(),
                request.getLocale());
        WebConfig.createTemplateEngine(getServletContext()).
                process("fill_in_blanks", ctx, response.getWriter());
    }
}