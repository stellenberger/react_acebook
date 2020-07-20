class SessionsController < ApplicationController

  def create
    @user = User.find_by(email: params[:user][:email])
    if user && user.authenticate(params[:user][:password])
      session[:user_id] = user.id
      @current_user = user
      render json: { data: {
        message: 'You are logged in',
        status: 'CONFIRMED',
        logged_in: true,
        user: user
      } }, status: :ok
    else
      render json: { data: {
        message: 'Credentials invalid',
        status: 'DENIED'
        } }
    end
  end

  # Delete to /sessions
  def destroy
    session[:user_id] = nil
    render json: { data: {message: 'You are logged out'} }, status: :ok
  end

  end
end
