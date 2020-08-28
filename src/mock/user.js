let result = {
  status: 200,
  msg: '登录成功',
  data: [
    {
      'menuId': 'M001',
      'pId': null,
      'menuName': '主页',
      'url': 'HomePage',
      'parentMenu': null,
      'childMenus': []
    },
    {
      'menuId': 'M002',
      'pId': null,
      'menuName': '选课',
      'url': 'ChooseCourse',
      'parentMenu': null,
      'childMenus': []
    },
    {
      'menuId': 'M003',
      'pId': null,
      'menuName': '个人信息',
      'url': 'PersonalInformation',
      'parentMenu': null,
      'childMenus': []
    },
    {
      'menuId': 'M004',
      'pId': null,
      'menuName': '修改密码',
      'url': 'ChangePassword',
      'parentMenu': null,
      'childMenus': []
    },
    {
      'menuId': 'M008',
      'pId': null,
      'menuName': '查看已选',
      'url': 'ViewSelected',
      'parentMenu': null,
      'childMenus': []
    }
  ]
}

let course = { 
  status: 200,
  msg: '获取到课程',
  data: [
    {
      'courseId': '007',
      'courseName': 'java',
      'major': {
        'majorId': '200',
        'school': null
      },
      'teacher': {
        'teacherId': '000001',
        'teacherName': '海峰',
        'school': null
      }
    },
    {
      'courseId': '200103',
      'courseName': '常微分',
      'major': {
        'majorId': '200',
        'school': null
      },
      'teacher': {
        'teacherId': '000001',
        'teacherName': '海峰',
        'school': null
      }
    },
    {
      'courseId': '200101',
      'courseName': '数学分析',
      'major': {
        'majorId': '200',
        'school': null
      },
      'teacher': {
        'teacherId': '007001',
        'teacherName': '张三',
        'school': null
      }
    },
    {
      'courseId': '200102',
      'courseName': '高等代数',
      'major': {
        'majorId': '200',
        'school': null
      },
      'teacher': {
        'teacherId': '000001',
        'teacherName': '海峰',
        'school': null
      }
    },
    {
      'courseId': '008',
      'courseName': 'ajax',
      'major': {
        'majorId': '200',
        'school': null
      },
      'teacher': {
        'teacherId': '007001',
        'teacherName': '张三',
        'school': null
      }
    },
    {
      'courseId': '200104',
      'courseName': '数据库',
      'major': {
        'majorId': '200',
        'school': null
      },
      'teacher': {
        'teacherId': '007001',
        'teacherName': '张三',
        'school': null
      }
    },
    {
      'courseId': '001',
      'courseName': '计算机',
      'major': {
        'majorId': '200',
        'school': null
      },
      'teacher': {
        'teacherId': '007001',
        'teacherName': '张三',
        'school': null
      }
    },
    {
      'courseId': '002',
      'courseName': '计量学',
      'major': {
        'majorId': '200',
        'school': null
      },
      'teacher': {
        'teacherId': '007001',
        'teacherName': '张三',
        'school': null
      }
    },
    {
      'courseId': '009',
      'courseName': 'fff',
      'major': {
        'majorId': '200',
        'school': null
      },
      'teacher': {
        'teacherId': '007001',
        'teacherName': '张三',
        'school': null
      }
    },
    {
      'courseId': '003',
      'courseName': 'Python',
      'major': {
        'majorId': '200',
        'school': null
      },
      'teacher': {
        'teacherId': '000001',
        'teacherName': '海峰',
        'school': null
      }
    },
    {
      'courseId': '004',
      'courseName': '微观经济学',
      'major': {
        'majorId': '200',
        'school': null
      },
      'teacher': {
        'teacherId': '000001',
        'teacherName': '海峰',
        'school': null
      }
    }
  ]
}

let course1 = { 
  status: 200,
  msg: '获取到课程',
  data: [
    {
      'courseId': '200103',
      'courseName': '常微分',
      'major': {
        'majorId': '200',
        'school': null
      },
      'teacher': {
        'teacherId': '000001',
        'teacherName': '海峰',
        'school': null
      }
    },
    {
      'courseId': '200102',
      'courseName': '高等代数',
      'major': {
        'majorId': '200',
        'school': null
      },
      'teacher': {
        'teacherId': '000001',
        'teacherName': '海峰',
        'school': null
      }
    },
    {
      'courseId': '008',
      'courseName': 'ajax',
      'major': {
        'majorId': '200',
        'school': null
      },
      'teacher': {
        'teacherId': '007001',
        'teacherName': '张三',
        'school': null
      }
    },
    {
      'courseId': '200104',
      'courseName': '数据库',
      'major': {
        'majorId': '200',
        'school': null
      },
      'teacher': {
        'teacherId': '007001',
        'teacherName': '张三',
        'school': null
      }
    },
    {
      'courseId': '001',
      'courseName': '计算机',
      'major': {
        'majorId': '200',
        'school': null
      },
      'teacher': {
        'teacherId': '007001',
        'teacherName': '张三',
        'school': null
      }
    },
    {
      'courseId': '002',
      'courseName': '计量学',
      'major': {
        'majorId': '200',
        'school': null
      },
      'teacher': {
        'teacherId': '007001',
        'teacherName': '张三',
        'school': null
      }
    },
    {
      'courseId': '009',
      'courseName': 'fff',
      'major': {
        'majorId': '200',
        'school': null
      },
      'teacher': {
        'teacherId': '007001',
        'teacherName': '张三',
        'school': null
      }
    },
    {
      'courseId': '003',
      'courseName': 'Python',
      'major': {
        'majorId': '200',
        'school': null
      },
      'teacher': {
        'teacherId': '000001',
        'teacherName': '海峰',
        'school': null
      }
    },
    {
      'courseId': '004',
      'courseName': '微观经济学',
      'major': {
        'majorId': '200',
        'school': null
      },
      'teacher': {
        'teacherId': '000001',
        'teacherName': '海峰',
        'school': null
      }
    }
  ]
}

let major = {
  status: 200,
  msg: '获取到专业',
  data: [{'majorId': '200'}, {'majorId': '100'}]
}

let user = {
  result,
  course,
  major,
  course1
}
export default user


