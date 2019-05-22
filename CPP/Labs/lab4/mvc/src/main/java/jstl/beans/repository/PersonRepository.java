package jstl.beans.repository;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;
import jstl.beans.domain.*;
import static jstl.beans.util.Database.getConnection;

public class PersonRepository implements Repository<Person, Integer> {

	public List<Person> getAll() {
		Connection conn = getConnection();
		List<Person> list = null;
		String sql = "select* from person;";
		Statement statement;
		try {
			statement = conn.createStatement();
			ResultSet rs = statement.executeQuery(sql);
			list = new ArrayList<Person>();
			while(rs.next()) {
				Person person = new Person();
				person.setId(rs.getInt(1));
				person.setName(rs.getString(2));
				person.setAge(rs.getInt(3));
				person.setPhoneNumber(rs.getString(4));
				list.add(person);
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return list;
		
	}

	public Person getById(Integer id) {
		Connection conn = getConnection();
		List<Person> list = null;
		String sql = "select* from person where id=?;";
		Statement statement;
		PreparedStatement preparedStatement;
		try {
			preparedStatement = conn.prepareStatement(sql);
			preparedStatement.setInt(1, id);
			statement = conn.createStatement();
			ResultSet rs = statement.executeQuery(sql);
			list = new ArrayList<Person>();
			while(rs.next()) {
				Person person = new Person();
				person.setId(rs.getInt(1));
				person.setName(rs.getString(2));
				person.setAge(rs.getInt(3));
				person.setPhoneNumber(rs.getString(4));
				list.add(person);
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return list;
	}

	public Person add(Person entity) {
		Connection conn = getConnection();
		
		String sql = "insert into person(name, age, phoneNumber) values(?,?,?)";
		PreparedStatement preparedStatement;
		try {
			preparedStatement = conn.prepareStatement(sql);
			preparedStatement.setString(1, entity.getName());
			preparedStatement.setInt(2, entity.getAge());
			preparedStatement.setString(3, entity.getPhoneNumber());
			preparedStatement.executeUpdate();
			return entity;
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}

	public void remove(Integer id) {
		Connection conn = getConnection();
		String sql = "DELETE FROM persons WHERE id=?";
		 
		PreparedStatement preparedStatement;
		try {
			preparedStatement = conn.prepareStatement(sql);
			preparedStatement.setInt(1, id);
			preparedStatement.executeUpdate();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}

	public void update(Person entity) {
		Connection conn = getConnection();
		String sql = "UPDATE persons SET name=?, age=?, phoneNumber=? WHERE name=?";
		 
		PreparedStatement preparedStatement;
		try {
			preparedStatement = conn.prepareStatement(sql);
			preparedStatement.setString(1, entity.getName());
			preparedStatement.setInt(2, entity.getAge());
			preparedStatement.setString(3, entity.getPhoneNumber());
			preparedStatement.setString(4, entity.getName());
			preparedStatement.executeUpdate();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}

}
