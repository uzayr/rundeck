# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure(2) do |config|

  config.vm.define "centos7" do |centos7|
    centos7.vm.box = "centos/7"
  end
  config.vm.network :forwarded_port, host: 2015, guest: 2015
  config.vm.network :private_network, ip: "192.168.33.11"
  config.vm.hostname = "localhost"

  config.vm.provision "ansible" do |ansible|
      ansible.playbook = 'run/run.yml'
  end

  $script = <<SCRIPT
  # curl localhost and get the http response code
  while ! curl -Is localhost:2015 -o /dev/null; do
    sleep 1 && echo -n .
  done
  http_code=$(curl --silent --head --output /dev/null -w '%{http_code}' localhost:2015)
  case $http_code in
    200|404) echo "$http_code | Server running http://localhost:2015" ;;
    000)     echo "$http_code | Server not accessible!" >&2 ;;
    *)       echo "$http_code | Unknown http response code!" >&2 ;;
  esac
SCRIPT
  # Fix 'stdin: is not a tty' error
  config.ssh.pty = true
  config.vm.provision :shell, inline: $script

  config.vm.synced_folder ".", "/vagrant", disabled: true
end
