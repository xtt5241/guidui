import request from '@/utils/request'

// 注册接口
export const userRegisterService = ({ username, password, is_reviewer }) =>
  request.post('/register', { username, password, is_reviewer })

// 登录接口
export const userLoginService = ({ username, password }) =>
  request.post('/login', { username, password })

// 获取用户基本信息
export const userGetInfoService = () => request.get('/users/list')

// 更新用户基本信息
export const userUpdateInfoService = ({ id, nickname, email }) =>
  request.put('/my/userinfo', { id, nickname, email })

// 更新用户头像
export const userUpdateAvatarService = (avatar) =>
  request.patch('/my/update/avatar', { avatar })

// 更新用户密码
export const userUpdatePasswordService = ({ old_pwd, new_pwd, re_pwd }) =>
  request.patch('/my/updatepwd', { old_pwd, new_pwd, re_pwd })
