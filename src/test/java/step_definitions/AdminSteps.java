package step_definitions;

import cucumber.api.java.en.And;
import org.example.pageObject.AdminPage;
import org.example.pageObject.RegisterPage;
import org.openqa.selenium.WebDriver;

public class AdminSteps {

    private WebDriver webDriver;

    public AdminSteps(){
        super();
        this.webDriver = Hooks.webDriver;
    }
    @And("Admin check status of request")
    public void AdminClickCheck()throws InterruptedException {
        AdminPage adminPage = new AdminPage(webDriver);
        adminPage.buttonCheckDetailAdmin();
        Thread.sleep(3000);
    }

    @And("Admin see detail request")
    public void AdminCheck()throws InterruptedException{
        AdminPage adminPage = new AdminPage(webDriver);
        adminPage.getHeaderAdminDetail();
        Thread.sleep(6000);
    }

    @And("Admin see license")
    public void AdminLicense() {
        AdminPage adminPage = new AdminPage(webDriver);
        adminPage.clickDownloadLisensi();
    }


    @And("Admin accept the request")
    public void AdminAccept() {
        AdminPage adminPage = new AdminPage(webDriver);
        adminPage.clickAcceptAdmin();
    }

    @And("Admin decline the request")
    public void AdminDecline() {
        AdminPage adminPage = new AdminPage(webDriver);
        adminPage.clickDeclineAdmin();
    }



}
