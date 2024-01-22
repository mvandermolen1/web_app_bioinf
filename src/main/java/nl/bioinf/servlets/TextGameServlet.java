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
import javax.servlet.http.HttpSession;
import java.io.IOException;

@WebServlet(name = "TextGameServlet", urlPatterns = "/textgame", loadOnStartup = 1)
public class TextGameServlet extends HttpServlet {
    private TemplateEngine templateEngine;

    @Override
    public void init() throws ServletException {
        this.templateEngine = WebConfig.getTemplateEngine();
    }
    public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException{
        process(request, response);
    }
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException{
        //this step is optional; standard settings also suffice
        WebConfig.configureResponse(response);
        WebContext ctx = new WebContext(
                request,
                response,
                request.getServletContext(),
                request.getLocale());
        HttpSession session = request.getSession();
        if(session.isNew()){
            session.setAttribute("total_error", 0);
        }
        int id = Integer.parseInt(request.getParameter("id"));
        int error = Integer.parseInt(request.getParameter("error"));
        int old_errors = (int) session.getAttribute("total_error");
        session.setAttribute("total_error", old_errors + error);
        ctx.setVariable("id", id);
        ctx.setVariable("error", error);
        templateEngine.process("textgame", ctx, response.getWriter());
    }
    public void process(HttpServletRequest request, HttpServletResponse response)
            throws IOException {
        //this step is optional; standard settings also suffice
        WebConfig.configureResponse(response);
        WebContext ctx = new WebContext(
                request,
                response,
                request.getServletContext(),
                request.getLocale());
        templateEngine.process("textgame", ctx, response.getWriter());
    }
}