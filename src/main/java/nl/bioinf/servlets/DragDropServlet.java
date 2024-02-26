package nl.bioinf.servlets;
import nl.bioinf.config.WebConfig;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.WebContext;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet(name = "DragDropServlet", urlPatterns = "/drag", loadOnStartup = 1)
/**
 * DragDrop 'class', a servlet to use for the first drag and drop game
 */
public class DragDropServlet extends HttpServlet {

    private TemplateEngine templateEngine;
    @Override
    public void init() throws ServletException {
        final ServletContext servletContext = this.getServletContext();
        this.templateEngine = WebConfig.getTemplateEngine();
    }
    private static final long serialVersionUID = 1L;


    /**
     * @param request, response
     *     generates the response within the drag_and_drop_event html page for post requests
     */
    public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException{
        WebConfig.configureResponse(response);
        WebContext ctx = new WebContext(
                request,
                response,
                request.getServletContext(),
                request.getLocale());
        templateEngine.process("drag_and_drop_event", ctx, response.getWriter());
    }

    /**
     * @param request, response
     *     generates the response within the drag_and_drop_event html page for get requests
     */
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException{
        WebConfig.configureResponse(response);
        WebContext ctx = new WebContext(
                request,
                response,
                request.getServletContext(),
                request.getLocale());
        templateEngine.process("drag_and_drop_event", ctx, response.getWriter());
    }
}