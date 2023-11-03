
Vagrant.configure("2") do |config|

  config.vm.box = "debian/bullseye64"
  config.vm.provision "shell", path: "provision.sh" 
  config.vm.hostname = "VMReact"

  config.vm.provider "virtualbox" do |vb|
    vb.memory = 2048
    vb.cpus = 2
  end

  config.vm.network "forwarded_port", guest: 80, host: 80
  config.vm.network "forwarded_port", guest: 443, host: 443
  config.vm.network "forwarded_port", guest: 8080, host: 8080
  config.vm.network "forwarded_port", guest: 3306, host: 3306
  config.vm.network "forwarded_port", guest: 8001, host: 8001
  config.vm.network "forwarded_port", guest: 8000, host: 8000

  config.vm.synced_folder ".", "/projeto"


end
