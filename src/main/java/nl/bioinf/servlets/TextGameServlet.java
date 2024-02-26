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

@WebServlet(name = "TextGameServlet", urlPatterns = "/textgame", loadOnStartup = 1)
/**
 * TextGame 'class', a servlet responsible for handling requests of the textgame
 */
public class TextGameServlet extends HttpServlet {
    @Override
    public void init() throws ServletException {
        System.out.println("Initializing Thymeleaf template engine");
        final ServletContext servletContext = this.getServletContext();
        WebConfig.createTemplateEngine(servletContext);
    }
    private static final long serialVersionUID = 1L;

    /**
     * @param request, response
     *     generates the response within the textgame html page for post requests
     */
    public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException{
        WebConfig.configureResponse(response);
        WebContext ctx = new WebContext(
                request,
                response,
                request.getServletContext(),
                request.getLocale());
        WebConfig.createTemplateEngine(getServletContext()).
                process("textgame", ctx, response.getWriter());
    }

    /**
     * @param request, response
     *     generates the response based on the id and errors made within the textgame html page for get requests
     */
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException{
        //this step is optional; standard settings also suffice
        WebConfig.configureResponse(response);
        WebContext ctx = new WebContext(
                request,
                response,
                request.getServletContext(),
                request.getLocale());
        int id = Integer.parseInt(request.getParameter("id"));
        ctx.setVariable("id", id);
        WebConfig.createTemplateEngine(getServletContext()).
                process("textgame", ctx, response.getWriter());
    }
}