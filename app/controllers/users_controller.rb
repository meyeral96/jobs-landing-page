class UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    respond_to do |format|
      if @user.save
        format.html { redirect_to root_path notice: "User was successfully created." }
        flash[:notice] = "Now we have your email. We will contact you soon "
      else
        format.html { render :new, status: :unprocessable_entity }
      end
    end
  end

  private

    def user_params
      params.permit(:email)
    end
end
