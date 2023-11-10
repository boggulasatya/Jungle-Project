class User < ApplicationRecord
  has_secure_password
  validates :email, presence: true, uniqueness: { case_sensitive: false }
  before_save { email.downcase! }
  validates :password, presence: true, length: { minimum: 8 }
  validates :password_confirmation, presence: true
  

  def self.authenticate_with_credentials(email, password)
    email.downcase!
    email.strip!
    @user = User.find_by_email(email)

    if @user && @user.authenticate(password)
      return @user
    else
      return nil
    end
  end
end
