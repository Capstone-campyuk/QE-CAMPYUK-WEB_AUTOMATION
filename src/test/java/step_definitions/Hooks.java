package step_definitions;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeDriverService;

public class Hooks {
    public static WebDriver webDriver;

    @Before
    public void openBrowser(){
//        System.setProperty("webdriver.chrome.driver",
//                System.getProperty("user.dir") + "\\driver\\chromedriver.exe");

        System.setProperty(ChromeDriverService.CHROME_DRIVER_EXE_PROPERTY, "driver/chromedriver");

        webDriver = new ChromeDriver();
        String appUrl= "https://campyuk.vercel.app/";
        webDriver.get(appUrl);
        webDriver.manage().window().maximize();
    }

    @After
    public void closeBrowser(){
        webDriver.quit();
    }
}
