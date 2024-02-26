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

@WebServlet(name = "CoverServlet", urlPatterns = "/index", loadOnStartup = 1)

/**
 * Cover 'class', a servlet to use for the cover.
 */
public class CoverServlet extends HttpServlet {
    private TemplateEngine templateEngine;

    @Override
    public void init() throws ServletException {
        final ServletContext servletContext = this.getServletContext();
        this.templateEngine = WebConfig.getTemplateEngine();
    }
    private static final long serialVersionUID = 1L;

    /**
     * @param request, response
     *     serves process and response to process
     */
    public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException{
        process(request, response);
    }

    /**
     * @param request, response
     *      generates the response within the index html page for get requests
     */
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        WebContext ctx = new WebContext(
                request,
                response,
                request.getServletContext(),
                request.getLocale());
        templateEngine.process("index", ctx, response.getWriter());
    }

    /**
     * @param request, response
     *      generates the response within the index html page for post requests
     */
    public void process(HttpServletRequest request, HttpServletResponse response)
            throws IOException {
        //this step is optional; standard settings also suffice
        WebConfig.configureResponse(response);
        WebContext ctx = new WebContext(
                request,
                response,
                request.getServletContext(),
                request.getLocale());
        templateEngine.process("index", ctx, response.getWriter());
    }
}