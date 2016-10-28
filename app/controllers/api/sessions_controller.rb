require 'byebug'

class Api::SessionsController < ApplicationController
  def destroy
    current_user.session_token = current_user.reset_session_token!
    session[:session_token] = nil
  end

  def create
    @user = User.find_by(username:)
  end

  private
  def user_params
    params.require(:user).premit(:username, :password)
  end
end
