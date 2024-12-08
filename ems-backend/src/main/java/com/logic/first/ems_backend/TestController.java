package com.logic.first.ems_backend;
import java.io.IOException;
import java.io.PrintWriter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Controller
public class TestController 
{
	@Autowired
	private JdbcTemplate jt;

	@GetMapping("/show")
	public String showLogin()
	{
		return "login";
	}
	
	@GetMapping("/show1")
	public String showRegister()
	{
		return "register";
	}
	@RequestMapping("/register")
	public String doRegistration(HttpServletRequest req,HttpServletResponse res)throws ServletException,IOException
	{
		res.setContentType("text/html");
		PrintWriter pw=res.getWriter();
		String a=req.getParameter("t1");
		String b=req.getParameter("t2");
		String c=req.getParameter("t3");
		String d=req.getParameter("t4");
		String e=req.getParameter("t5");
		String f=req.getParameter("t6");
		
		String x="insert into employee1 values(?,?,?,?,?,?)";
		int count=jt.update(x,a,b,c,d,e,f);
		pw.println("row inserted :"+count);		
		return "success";
	}}