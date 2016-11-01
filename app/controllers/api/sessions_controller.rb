require 'byebug'

class Api::SessionsController < ApplicationController
  def destroy
    if current_user
      current_user.reset_session_token!
      session[:session_token] = nil
      render "api/users/show"
    else
      render(
      json:["Nobody Signed in"],
      status: 404
      )
    end
  end

  def create
    @user = User.find_by_username(params[:user][:username])

    if @user.is_password?(params[:user][:password])
      sign_in(@user)
    else
      render @user.errors.full_messages status: 422
    end
  end

  private
  def user_params
    params.require(:user).premit(:username, :password)
  end
end
