class SessionsController < ApplicationController

  def create
    @user = User.find_by(email: params[:user][:email])
    if @user && @user.authenticate(params[:user][:password])
      session[:user_id] = @user.id
      p session[:user_id]
      @current_user = @user
      render json: { data: {
        message: 'You are logged in',
        status: 'CONFIRMED',
        logged_in: true,
        user: @user
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

  def logged_in
    if session[:user_id]
      render json: {
        logged_in: true,
        user: User.find(session[:user_id])
      }
    else 
      render json: {
        session: session[:user_id],
        logged_in: false
      }
    end
  end

end
