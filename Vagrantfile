
Vagrant.configure("2") do |config|

  config.vm.box = "base"


  config.vm.network "forwarded_port", guest: 80, host: 80
  config.vm.network "forwarded_port", guest: 443, host: 443
  config.vm.network "forwarded_port", guest: 8080, host: 8080
  config.vm.network "forwarded_port", guest: 3306, host: 3306
  config.vm.network "forwarded_port", guest: 8001, host: 8001

  config.vm.synced_folder ".", "/projeto"

  config.vm.provider "virtualbox" do |vb|
    v.memory = 2048
    v.cpus = 2
  end
  #
  # View the documentation for the provider you are using for more
  # information on available options.


  config.vm.provision "shell", inline: <<-SHELL
    apt-get update
    apt-get install -y apache2
  SHELL
end
