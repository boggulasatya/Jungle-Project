class Admin::DashboardController < ApplicationController
  def show
    @product.count = Product.count
    @category.count = Category.count
  end
end
