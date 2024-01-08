<script lang="ts">
import FontAwesomeIcon from "../utils/fontawesome-icons";

</script>
<template>
    <div class="notification-wrapper">
        <input type="text" placeholder="Search" class="notification-wrapper__input" />
        <div class="notification-wrapper__avatar-container">
            <font-awesome-icon class="notification-wrapper__avatar-container-bell" :icon="['fa', 'bell']" />
            <img class="notification-wrapper__avatar-container-image"
                src="https://i.pinimg.com/736x/df/a0/36/dfa036866ac5d4ba8760b3671ae9381c.jpg" alt="notifications" />
        </div>
    </div>
</template>

<style scoped>
.notification-wrapper {
    padding-left: 40px;
    padding-right: 40px;
    padding-top: 40px;
    display: flex;
    justify-content: space-between;
    background-color: #f8f8f8;
}

.notification-wrapper__avatar-container-image {
    width: 40px;
    height: 40px;
    border-radius: 20px;
    margin-left: 10px;
}

.notification-wrapper__avatar-container-bell {
    background-color: #ffffff;
    position: relative;
}

.notification-wrapper__input {
    width: 700px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
}
</style>