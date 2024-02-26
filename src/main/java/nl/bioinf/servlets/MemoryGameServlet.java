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

@WebServlet(name = "MemoryGameServlet", urlPatterns = "/memorygame", loadOnStartup = 1)
/**
 * MemoryGame 'class', a servlet responsible for handling requests of the memorygame
 */
public class MemoryGameServlet extends HttpServlet {

    private TemplateEngine templateEngine;
    @Override
    public void init() throws ServletException {
        System.out.println("Initializing Thymeleaf template engine");
        final ServletContext servletContext = this.getServletContext();
        this.templateEngine = WebConfig.getTemplateEngine();
    }
    private static final long serialVersionUID = 1L;

    /**
     * @param request, response
     *     generates the response within the memorygame html page for post requests
     */
    public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException{
        WebConfig.configureResponse(response);
        WebContext ctx = new WebContext(
                request,
                response,
                request.getServletContext(),
                request.getLocale());
        templateEngine.process("memorygame", ctx, response.getWriter());

    }

    /**
     * @param request, response
     *     generates the response within the memory game html page for get requests
     */
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException{
        WebConfig.configureResponse(response);
        WebContext ctx = new WebContext(
                request,
                response,
                request.getServletContext(),
                request.getLocale());
        templateEngine.process("memorygame", ctx, response.getWriter());
    }
}