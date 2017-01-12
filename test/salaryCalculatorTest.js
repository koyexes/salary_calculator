var salaryCalculator = require ("../logic/salaryCalculator.js");


	describe("Case for Output", function (){
		it("should return an object", function(){
			expect(salaryCalculator("Peju","manager", 5, 2).employeeName).toBe("Peju");
		});
		it("should return a non Empty Object", function(){
			expect(salaryCalculator("koya", "director", 0, 10).employeeType).toBe("director");
		});

		it("", function(){});
	});


	describe("Case for Valid Input", function (){
		it("case of valid ", function(){
			expect(salaryCalculator("koya", "director", 0, 0).netSalary).toEqual(77500);
		});

		it ("", function(){
				expect(salaryCalculator("itua", "manager", 5, 5).basicSalary).toEqual(50000);
		});

		it ("", function(){
				expect(salaryCalculator("rowland", "director", 12, 0).employeeType).toBe("director");
		});

		it ("", function(){
				expect(salaryCalculator("hassan", "director", 0, 0).basicSalary).toEqual(100000);
		});

		it ("", function(){
				expect(salaryCalculator("itunu", "manager", 5, 5).employeeName).toBe("itunu");
		});

		it ("", function(){
				expect(salaryCalculator("ope", "manager", 5, 5).tax).toEqual(6500);
		});

		it ("", function(){
				expect(salaryCalculator("mary", "manager", 5, 5).employeeType).toBe("manager");
		});

		// it ("", function(){
		// 		expect(salaryCalculator("sharon", "manager", 5, 5).netSalary).toEqual(50000);
		// });


	});
